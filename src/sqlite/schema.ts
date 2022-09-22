import { FrenchTerm } from "../terms";

export function getTableNameForTerm(term: FrenchTerm): string {
  switch (term.type) {
    case "verbe":
      return "verbs";

    case "nom":
      return "nouns";

    case "adjectif":
      return "adjectives";

    case "conjonction":
      return "conjunctions";

    case "préposition":
      return "prepositions";

    case "interjection":
      return "interjections";

    case "pronom":
      return "pronouns";

    case "adverbe":
      return "adverbs";

    case "article":
      return "articles";
  }
}

export const FRENCH_SQLITE_SCHEMA = `
CREATE TABLE adverbs (
  entry TEXT NOT NULL,
  syllables NUMBER,
  PRIMARY KEY (entry)
);

CREATE TABLE conjunctions (
    entry TEXT NOT NULL,
    syllables NUMBER,
    PRIMARY KEY (entry)
);

CREATE TABLE prepositions (
    entry TEXT NOT NULL,
    syllables NUMBER,
    PRIMARY KEY (entry)
);

CREATE TABLE interjections (
    entry TEXT NOT NULL,
    syllables NUMBER,
    PRIMARY KEY (entry)
);

CREATE TABLE articles (
    entry TEXT NOT NULL,
    syllables NUMBER,
    kind TEXT,
    PRIMARY KEY (entry, kind)
);

CREATE TABLE pronouns (
  entry TEXT NOT NULL,
  syllables NUMBER,
  kind TEXT,
  PRIMARY KEY (entry, kind)
);

CREATE TABLE adjectives (
    entry TEXT NOT NULL,
    syllables NUMBER,
    kind TEXT,
    gender TEXT,
    number TEXT,
    reference_entry TEXT NOT NULL,
    PRIMARY KEY (entry, kind, gender, number, reference_entry)
);

CREATE TABLE nouns (
    entry TEXT NOT NULL,
    syllables NUMBER,
    gender TEXT,
    number TEXT,
    reference_entry TEXT NOT NULL,
    PRIMARY KEY (entry, gender, number, reference_entry)
);

CREATE TABLE verbs (
    entry TEXT NOT NULL,
    syllables NUMBER,
    infinitive TEXT NOT NULL,
    mood TEXT,
    tense TEXT,
    person TEXT,
    number TEXT,
    gender TEXT,
    PRIMARY KEY (entry, infinitive, mood, tense, person, number, gender)
);`;
