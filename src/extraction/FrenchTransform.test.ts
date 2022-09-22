import { Readable } from "node:stream";
import {
  testTermExtractionTransformsOnSinglePages,
  testTermExtractionTransformsOnMergedPages
} from "@giancosta86/jardinero-sdk";
import { wrapXmlIterable } from "@giancosta86/stream-utils";
import { FrenchTerm } from "../terms";
import { expectedTermCatalog, wikiPageCatalog } from "../test/pages";
import { FrenchTransform } from "./FrenchTransform";

testTermExtractionTransformsOnSinglePages<string, FrenchTerm>({
  wikiPageCatalog,

  wikiPageMapper: wikiPage => wikiPage.text,

  expectedTermCatalog,

  createExtractionTransforms: () => new FrenchTransform()
});

testTermExtractionTransformsOnMergedPages<string, FrenchTerm>({
  wikiPageCatalog,

  wikiPageMapper: wikiPage => wikiPage.text,

  pagesToReadableMapper: pages =>
    Readable.from(wrapXmlIterable(pages), { objectMode: false }),

  expectedTermCatalog,

  createExtractionTransforms: () => new FrenchTransform()
});
