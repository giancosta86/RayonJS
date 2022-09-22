import { Verb } from "../../terms";
import { countSyllables } from "../phonetics";
import { BuildTermVariationFromGraceParams } from "./common";

const missingElementRegex = /[?-]/;

export function buildVerbFromGrace({
  grace,
  entry,
  pronunciation,
  referenceEntry
}: BuildTermVariationFromGraceParams): Verb {
  const mood = grace[2]?.replace(missingElementRegex, "") || undefined;

  const tense = grace[3]?.replace(missingElementRegex, "") || undefined;

  const person = grace[4]?.replace(missingElementRegex, "") || undefined;

  const number = grace[5]?.replace(missingElementRegex, "") || undefined;

  const gender = grace[6]?.replace(missingElementRegex, "") || undefined;

  return {
    type: "verbe",
    entry,
    syllables: countSyllables(pronunciation),
    infinitive: referenceEntry,
    mood,
    tense,
    person,
    number,
    gender
  };
}
