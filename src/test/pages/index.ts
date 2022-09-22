import { join } from "node:path";
import { WikiPageCatalog } from "@giancosta86/jardinero-sdk";

export * from "./expectedTerms";

export const wikiPageCatalog = new WikiPageCatalog(join(__dirname, "data"));
