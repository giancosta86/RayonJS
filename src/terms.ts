export type FrenchTerm =
  | Adverb
  | Conjunction
  | Preposition
  | Interjection
  | Article
  | Pronoun
  | Adjective
  | Noun
  | Verb;

type FrenchTermBase = Readonly<{
  entry: string;
  syllables?: number;
}>;

export type Adverb = Readonly<
  FrenchTermBase & {
    type: "adverbe";
  }
>;

export type Conjunction = Readonly<
  FrenchTermBase & {
    type: "conjonction";
  }
>;

export type Preposition = Readonly<
  FrenchTermBase & {
    type: "préposition";
  }
>;

export type Interjection = Readonly<
  FrenchTermBase & {
    type: "interjection";
  }
>;

export type Article = Readonly<
  FrenchTermBase & {
    type: "article";
    kind?: string;
  }
>;

export type Pronoun = Readonly<
  FrenchTermBase & {
    type: "pronom";
    kind?: string;
  }
>;

export type Adjective = Readonly<
  FrenchTermBase & {
    type: "adjectif";
    kind?: string;
    gender?: string;
    number?: string;
    referenceEntry: string;
  }
>;

export type Noun = Readonly<
  FrenchTermBase & {
    type: "nom";
    gender?: string;
    number?: string;
    referenceEntry: string;
  }
>;

export type Verb = Readonly<
  FrenchTermBase & {
    type: "verbe";
    infinitive: string;
    mood?: string;
    tense?: string;
    person?: string;
    number?: string;
    gender?: string;
  }
>;
