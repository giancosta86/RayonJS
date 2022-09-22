import { Readable } from "node:stream";
import {
  testPluginExtractionTransformsOnSinglePages,
  testPluginExtractionTransformsOnMergedPages
} from "@giancosta86/jardinero-sdk";
import { wrapXmlIterable } from "@giancosta86/stream-utils";
import { FrenchPlugin } from "./plugin";
import { wikiPageCatalog, expectedTermCatalog } from "./test/pages";

testPluginExtractionTransformsOnSinglePages({
  wikiPageCatalog,

  wikiPageMapper: wikiPage => wikiPage.text,

  expectedTermCatalog,

  pluginClass: FrenchPlugin
});

testPluginExtractionTransformsOnMergedPages({
  wikiPageCatalog,

  wikiPageMapper: wikiPage => wikiPage.text,

  pagesToReadableMapper: pages =>
    Readable.from(wrapXmlIterable(pages), { objectMode: false }),

  expectedTermCatalog,

  pluginClass: FrenchPlugin
});
