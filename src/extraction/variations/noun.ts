import { Noun } from "../../terms";
import { countSyllables } from "../phonetics";
import { BuildTermVariationFromGraceParams } from "./common";

export function buildNounFromGrace({
  grace,
  entry,
  pronunciation,
  referenceEntry
}: BuildTermVariationFromGraceParams): Noun {
  const gender = grace[2]?.replace("?", "") || undefined;

  const number = grace[3]?.replace("?", "") || undefined;

  return {
    type: "nom",
    entry,
    syllables: countSyllables(pronunciation),
    gender,
    number,
    referenceEntry
  };
}
