import { Transform, TransformCallback } from "node:stream";
import { createStream } from "sax";
import { Logger } from "@giancosta86/unified-logging";
import { formatError } from "@giancosta86/format-error";
import { buildFixedTerm } from "./fixedTerms";
import { buildTermVariationFromGrace } from "./variations";

const GLAWI_PAGE_TAG = "article";

const DEFAULT_PAGE_BATCH_SIZE = 1789;

export const PAGE_BATCH_PROCESSED_EVENT = "page_batch_processed";

export type FrenchTransformOptions = Readonly<{
  pageBatchSize?: number;
  highWaterMark?: number;
  signal?: AbortSignal;
  logger?: Logger;
}>;

type PageContext = {
  title?: string;
  pronunciation?: string;
};

type PosContext = {
  type: string;
  kind?: string;
  pronunciation?: string;
  variations: number;
};

const posTypeAndKindRegex = /(?<type>\S+)(?:\s+(?<kind>.+))?/;

export class FrenchTransform extends Transform {
  private readonly logger?: Logger;
  private readonly pageBatchSize: number;

  private processedPages = 0;

  private readonly textBuffer: string[] = [];
  private bufferingText = false;

  private pageContext: PageContext = {};

  private posContext?: PosContext;

  private saxError?: Error;

  private readonly saxStream = createStream(true)
    .on("opentag", tag => {
      switch (tag.name) {
        case GLAWI_PAGE_TAG:
          this.pageContext = {};
          return;

        case "title":
        case "pron":
          this.bufferingText = true;
          return;

        case "pos": {
          const fullPosType = tag.attributes["type"] as string | undefined;
          if (!fullPosType) {
            return;
          }

          const posTypeAndKindMatch = posTypeAndKindRegex.exec(fullPosType);
          if (!posTypeAndKindMatch) {
            return;
          }

          const posType = posTypeAndKindMatch.groups?.["type"];
          if (!posType) {
            return;
          }

          const posKind = posTypeAndKindMatch.groups?.["kind"];

          this.posContext = {
            type: posType,
            kind: posKind,
            variations: 0
          };
          return;
        }

        case "inflection": {
          if (!this.pageContext.title) {
            this.logger?.warn("Found an inflection in a title-less page");
            return;
          }

          if (!this.posContext) {
            this.logger?.warn(
              `Found an inflection out of a POS block in page '${this.pageContext.title}'`
            );
            return;
          }

          const form = tag.attributes["form"] as string | undefined;
          const grace = tag.attributes["gracePOS"] as string | undefined;
          if (!form || !grace) {
            this.logger?.warn(
              `Insufficient info provided by inflection in page '${this.pageContext.title}'`
            );
            return;
          }

          const inlinePronunciations = tag.attributes["prons"] as
            | string
            | undefined;

          const mainInlinePronunciation = inlinePronunciations?.split(";")?.[0];

          const pronunciation =
            mainInlinePronunciation ||
            this.posContext.pronunciation ||
            this.pageContext.pronunciation;

          const frenchTerm = buildTermVariationFromGrace({
            type: this.posContext.type,
            kind: this.posContext.kind,
            entry: form,
            pronunciation,
            grace,
            referenceEntry: this.pageContext.title
          });

          if (frenchTerm) {
            this.push(frenchTerm);
          }
          this.posContext.variations++;

          return;
        }

        case "inflectedForm": {
          if (!this.pageContext.title) {
            this.logger?.warn("Found an inflected form in a title-less page");
            return;
          }

          if (!this.posContext) {
            this.logger?.warn(
              `Found an inflected form out of a POS block in page '${this.pageContext.title}`
            );
            return;
          }

          const grace = tag.attributes["gracePOS"] as string | undefined;
          const referenceEntry = tag.attributes["lemma"] as string | undefined;
          if (!grace || !referenceEntry) {
            this.logger?.warn(
              `Insufficient info provided by inflected form in page '${this.pageContext.title}'`
            );
            return;
          }

          const pronunciation =
            this.posContext.pronunciation || this.pageContext.pronunciation;

          const frenchTerm = buildTermVariationFromGrace({
            type: this.posContext.type,
            kind: this.posContext.kind,
            entry: this.pageContext.title,
            pronunciation,
            grace,
            referenceEntry
          });

          if (frenchTerm) {
            this.push(frenchTerm);
          }
          this.posContext.variations++;

          return;
        }
      }
    })
    .on("text", text => {
      if (this.bufferingText) {
        this.textBuffer.push(text);
      }
    })
    .on("cdata", text => {
      if (this.bufferingText) {
        this.textBuffer.push(text);
      }
    })
    .on("closetag", tagName => {
      switch (tagName) {
        case GLAWI_PAGE_TAG: {
          this.processedPages++;

          if (this.processedPages % this.pageBatchSize == 0) {
            this.emit(PAGE_BATCH_PROCESSED_EVENT, this.processedPages);
          }

          return;
        }

        case "title":
          this.bufferingText = false;
          this.pageContext.title = this.textBuffer.join("");
          this.textBuffer.length = 0;
          return;

        case "pron": {
          this.bufferingText = false;
          const pronunciation = this.textBuffer.join("");
          this.textBuffer.length = 0;

          if (this.posContext) {
            this.posContext.pronunciation = pronunciation;
          } else {
            this.pageContext.pronunciation = pronunciation;
          }

          return;
        }

        case "pos": {
          if (!this.pageContext.title) {
            this.logger?.warn("Skipping page with no title");
            return;
          }

          if (!this.posContext) {
            this.logger?.warn(
              `Skipping page '${this.pageContext.title}' - it has cumulated no POS context`
            );
            return;
          }

          if (!this.posContext.variations) {
            const frenchTerm = buildFixedTerm({
              entry: this.pageContext.title,
              type: this.posContext.type,
              pronunciation:
                this.posContext.pronunciation || this.pageContext.pronunciation,
              kind: this.posContext.kind
            });

            if (frenchTerm) {
              this.push(frenchTerm);
            }
          }

          this.posContext = undefined;

          return;
        }
      }
    })
    .on("error", err => {
      this.logger?.error(
        `Error while parsing the GLAWI dictionary: ${formatError(err)}`
      );

      if (!this.saxError) {
        this.saxError = err;
      }
    });

  constructor(options?: FrenchTransformOptions) {
    super({
      objectMode: true,
      highWaterMark: options?.highWaterMark,
      signal: options?.signal
    });
    this.logger = options?.logger;
    this.pageBatchSize = options?.pageBatchSize ?? DEFAULT_PAGE_BATCH_SIZE;
  }

  override _transform(
    chunk: unknown,
    encoding: BufferEncoding,
    callback: TransformCallback
  ): void {
    this.saxStream.write(chunk, encoding);
    callback(this.saxError);
  }

  override _flush(callback: TransformCallback): void {
    this.saxStream.end();
    callback(this.saxError);
  }
}
