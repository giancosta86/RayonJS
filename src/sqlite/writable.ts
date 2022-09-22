import { SqliteWritableBuilder } from "@giancosta86/sqlite-writable";
import {
  Adjective,
  Adverb,
  Article,
  Conjunction,
  Interjection,
  Noun,
  Preposition,
  Pronoun,
  Verb
} from "../terms";

export function createFrenchWritableBuilder(): SqliteWritableBuilder {
  return new SqliteWritableBuilder()
    .withMaxObjectsInTransaction(45000)
    .withSafeType<Adverb>(
      "adverbe",
      "adverbs",
      ["entry", "syllables"],
      adverb => [adverb.entry, adverb.syllables]
    )
    .withSafeType<Conjunction>(
      "conjonction",
      "conjunctions",
      ["entry", "syllables"],
      conjunction => [conjunction.entry, conjunction.syllables]
    )
    .withSafeType<Preposition>(
      "préposition",
      "prepositions",
      ["entry", "syllables"],
      preposition => [preposition.entry, preposition.syllables]
    )
    .withSafeType<Interjection>(
      "interjection",
      "interjections",
      ["entry", "syllables"],
      interjection => [interjection.entry, interjection.syllables]
    )
    .withSafeType<Article>(
      "article",
      "articles",
      ["entry", "syllables", "kind"],
      article => [article.entry, article.syllables, article.kind]
    )
    .withSafeType<Pronoun>(
      "pronom",
      "pronouns",
      ["entry", "syllables", "kind"],
      pronoun => [pronoun.entry, pronoun.syllables, pronoun.kind]
    )
    .withSafeType<Adjective>(
      "adjectif",
      "adjectives",
      ["entry", "syllables", "kind", "gender", "number", "reference_entry"],
      adjective => [
        adjective.entry,
        adjective.syllables,
        adjective.kind,
        adjective.gender,
        adjective.number,
        adjective.referenceEntry
      ]
    )
    .withSafeType<Noun>(
      "nom",
      "nouns",
      ["entry", "syllables", "gender", "number", "reference_entry"],
      noun => [
        noun.entry,
        noun.syllables,
        noun.gender,
        noun.number,
        noun.referenceEntry
      ]
    )
    .withSafeType<Verb>(
      "verbe",
      "verbs",
      [
        "entry",
        "syllables",
        "infinitive",
        "mood",
        "tense",
        "person",
        "number",
        "gender"
      ],
      verbForm => [
        verbForm.entry,
        verbForm.syllables,
        verbForm.infinitive,
        verbForm.mood,
        verbForm.tense,
        verbForm.person,
        verbForm.number,
        verbForm.gender
      ]
    );
}
