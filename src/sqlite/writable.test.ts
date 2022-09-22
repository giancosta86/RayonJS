import { testSqliteWritable } from "@giancosta86/jardinero-sdk";
import { getTableNameForTerm, FRENCH_SQLITE_SCHEMA } from "./schema";
import { createFrenchWritableBuilder } from "./writable";
import { FrenchTerm } from "../terms";

testSqliteWritable<FrenchTerm>({
  dbSchema: FRENCH_SQLITE_SCHEMA,

  getTableNameForTerm,

  createSqliteWritableBuilder: createFrenchWritableBuilder,

  terms: [
    {
      type: "adverbe",
      entry: "test adverb",
      syllables: 7
    },
    {
      type: "conjonction",
      entry: "test_conjunction",
      syllables: 2
    },
    {
      type: "préposition",
      entry: "test_preposition",
      syllables: 3
    },
    {
      type: "interjection",
      entry: "test_interjection",
      syllables: 1
    },
    {
      type: "article",
      entry: "test_article",
      syllables: 2,
      kind: "k4"
    },
    {
      type: "pronom",
      entry: "test_pronoun",
      syllables: 1,
      kind: "k3"
    },
    {
      type: "adjectif",
      entry: "test_adjective",
      syllables: 4,
      kind: "x",
      gender: "m",
      number: "p",
      referenceEntry: "r1"
    },
    {
      type: "nom",
      entry: "test_noun",
      syllables: 4,
      gender: "m",
      number: "p",
      referenceEntry: "r2"
    },
    {
      type: "verbe",
      entry: "test_verb",
      syllables: 3,
      infinitive: "inf",
      mood: "mx",
      tense: "tx",
      person: "1",
      number: "s",
      gender: "m"
    }
  ]
});
