import { FrenchTerm } from "../terms";
import { countSyllables } from "./phonetics";

export type BuildFixedTermParams = {
  type: string;
  entry: string;
  pronunciation?: string;
  kind?: string;
};

export function buildFixedTerm({
  type,
  entry,
  pronunciation,
  kind
}: BuildFixedTermParams): FrenchTerm | null {
  switch (type) {
    case "adverbe":
    case "conjonction":
    case "interjection":
    case "préposition": {
      return {
        type,
        entry,
        syllables: countSyllables(pronunciation)
      };
    }

    case "pronom":
    case "article": {
      return {
        type,
        entry,
        syllables: countSyllables(pronunciation),
        kind
      };
    }

    case "adjectif": {
      return {
        type,
        entry,
        syllables: countSyllables(pronunciation),
        kind,
        referenceEntry: entry
      };
    }

    default:
      return null;
  }
}
