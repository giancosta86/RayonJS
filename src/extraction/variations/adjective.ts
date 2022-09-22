import { Adjective } from "../../terms";
import { countSyllables } from "../phonetics";
import { BuildTermVariationFromGraceParams } from "./common";

export function buildAdjectiveFromGrace({
  entry,
  pronunciation,
  kind,
  referenceEntry,
  grace
}: BuildTermVariationFromGraceParams): Adjective {
  const gender = grace[3]?.replace("?", "") || undefined;

  const number = grace[4]?.replace("?", "") || undefined;

  return {
    type: "adjectif",
    entry,
    syllables: countSyllables(pronunciation),
    kind,
    gender,
    number,
    referenceEntry
  };
}
