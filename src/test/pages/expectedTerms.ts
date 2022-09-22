import { ExpectedTermCatalog } from "@giancosta86/jardinero-sdk";
import { FrenchTerm } from "../../terms";

export const expectedTermCatalog = new ExpectedTermCatalog<FrenchTerm>({
  demain: [
    {
      type: "adverbe",
      entry: "demain",
      syllables: 2
    }
  ],

  pourtant: [
    {
      type: "adverbe",
      entry: "pourtant",
      syllables: 2
    }
  ],

  "bien que": [
    {
      type: "conjonction",
      entry: "bien que",
      syllables: 1
    }
  ],

  aussi: [
    {
      type: "adverbe",
      entry: "aussi",
      syllables: 2
    },
    {
      type: "conjonction",
      entry: "aussi",
      syllables: 2
    }
  ],

  crayon: [
    {
      type: "nom",
      entry: "crayon",
      syllables: 2,
      gender: "m",
      number: "s",
      referenceEntry: "crayon"
    },

    {
      type: "nom",
      entry: "crayons",
      syllables: 2,
      gender: "m",
      number: "p",
      referenceEntry: "crayon"
    }
  ],

  crayons: [
    {
      type: "nom",
      entry: "crayons",
      syllables: 2,
      gender: "m",
      number: "p",
      referenceEntry: "crayon"
    },
    {
      type: "verbe",
      entry: "crayons",
      syllables: 2,
      infinitive: "crayer",
      mood: "i",
      tense: "p",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "crayons",
      syllables: 2,
      infinitive: "crayer",
      mood: "m",
      tense: "p",
      person: "1",
      number: "p"
    }
  ],

  livre: [
    {
      type: "nom",
      entry: "livre",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "livre"
    },
    {
      type: "nom",
      entry: "livres",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "livre"
    },
    {
      type: "nom",
      entry: "livre",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "livre"
    },
    {
      type: "nom",
      entry: "livres",
      syllables: 1,
      gender: "f",
      number: "p",
      referenceEntry: "livre"
    },
    {
      type: "verbe",
      entry: "livre",
      syllables: 1,
      infinitive: "livrer",
      mood: "i",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "livre",
      syllables: 1,
      infinitive: "livrer",
      mood: "i",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "livre",
      syllables: 1,
      infinitive: "livrer",
      mood: "s",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "livre",
      syllables: 1,
      infinitive: "livrer",
      mood: "s",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "livre",
      syllables: 1,
      infinitive: "livrer",
      mood: "m",
      tense: "p",
      person: "2",
      number: "s"
    }
  ],

  syllabation: [
    {
      type: "nom",
      entry: "syllabation",
      syllables: 4,
      gender: "f",
      number: "s",
      referenceEntry: "syllabation"
    },
    {
      type: "nom",
      entry: "syllabations",
      syllables: 4,
      gender: "f",
      number: "p",
      referenceEntry: "syllabation"
    }
  ],

  parbleu: [{ type: "interjection", entry: "parbleu", syllables: 2 }],

  je: [{ type: "pronom", entry: "je", syllables: 1, kind: "personnel" }],

  celui: [
    { type: "pronom", entry: "celui", syllables: 2, kind: "démonstratif" }
  ],

  rien: [
    { type: "pronom", entry: "rien", syllables: 1, kind: "indéfini" },
    { type: "adverbe", entry: "rien", syllables: 1 },
    {
      type: "nom",
      entry: "rien",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "rien"
    },
    {
      type: "nom",
      entry: "riens",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "rien"
    },
    {
      type: "nom",
      entry: "rien",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "rien"
    }
  ],

  le: [
    { type: "article", entry: "le", syllables: 1, kind: "défini" },
    { type: "pronom", entry: "le", syllables: 1, kind: "personnel" }
  ],

  les: [
    { type: "article", entry: "les", syllables: 1, kind: "défini" },
    { type: "pronom", entry: "les", syllables: 1, kind: "personnel" }
  ],

  contre: [
    { type: "préposition", entry: "contre", syllables: 1 },
    { type: "adverbe", entry: "contre", syllables: 1 },
    {
      type: "nom",
      entry: "contre",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "contre"
    },
    {
      type: "nom",
      entry: "contres",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "contre"
    },
    {
      type: "verbe",
      entry: "contre",
      syllables: 1,
      infinitive: "contrer",
      mood: "i",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "contre",
      syllables: 1,
      infinitive: "contrer",
      mood: "i",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "contre",
      syllables: 1,
      infinitive: "contrer",
      mood: "s",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "contre",
      syllables: 1,
      infinitive: "contrer",
      mood: "s",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "contre",
      syllables: 1,
      infinitive: "contrer",
      mood: "m",
      tense: "p",
      person: "2",
      number: "s"
    }
  ],

  libre: [
    {
      type: "adjectif",
      entry: "libre",
      syllables: 1,
      kind: undefined,
      gender: "m",
      number: "s",
      referenceEntry: "libre"
    },
    {
      type: "adjectif",
      entry: "libre",
      syllables: 1,
      kind: undefined,
      gender: "f",
      number: "s",
      referenceEntry: "libre"
    },
    {
      type: "adjectif",
      entry: "libre",
      syllables: 1,
      kind: undefined,
      gender: "m",
      number: "s",
      referenceEntry: "libre"
    }
  ],

  sur: [
    { type: "préposition", syllables: 1, entry: "sur" },
    {
      type: "adjectif",
      entry: "sur",
      syllables: 1,
      kind: undefined,
      gender: "m",
      number: "s",
      referenceEntry: "sur"
    },
    {
      type: "adjectif",
      entry: "surs",
      syllables: 1,
      kind: undefined,
      gender: "m",
      number: "p",
      referenceEntry: "sur"
    },
    {
      type: "adjectif",
      entry: "sure",
      syllables: 1,
      kind: undefined,
      gender: "f",
      number: "s",
      referenceEntry: "sur"
    },
    {
      type: "adjectif",
      entry: "sures",
      syllables: 1,
      kind: undefined,
      gender: "f",
      number: "p",
      referenceEntry: "sur"
    }
  ],

  un: [
    {
      type: "adjectif",
      entry: "un",
      syllables: 1,
      kind: "numéral",
      referenceEntry: "un"
    },
    {
      type: "adjectif",
      entry: "un",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "un"
    },
    { type: "article", entry: "un", syllables: 1, kind: "indéfini" },
    { type: "pronom", entry: "un", syllables: 1, kind: "indéfini" },
    {
      type: "nom",
      entry: "un",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "un"
    },
    {
      type: "nom",
      entry: "uns",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "un"
    },
    {
      type: "nom",
      entry: "un",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "un"
    }
  ],

  une: [
    {
      type: "adjectif",
      entry: "une",
      syllables: 1,
      kind: "numéral",
      referenceEntry: "une"
    },
    {
      type: "adjectif",
      entry: "une",
      syllables: 1,
      gender: "f",
      referenceEntry: "un"
    },
    { type: "article", entry: "une", syllables: 1, kind: "indéfini" },
    { type: "pronom", entry: "une", syllables: 1, kind: "indéfini" },
    {
      type: "nom",
      entry: "une",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "une"
    },
    {
      type: "nom",
      entry: "unes",
      syllables: 1,
      gender: "f",
      number: "p",
      referenceEntry: "une"
    },
    {
      type: "nom",
      entry: "une",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "une"
    }
  ],

  deux: [
    {
      type: "adjectif",
      entry: "deux",
      syllables: 1,
      kind: "numéral",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "m",
      number: "p",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "deux"
    },
    {
      type: "nom",
      entry: "deux",
      syllables: 1,
      gender: "f",
      number: "p",
      referenceEntry: "deux"
    }
  ],

  roux: [
    {
      type: "adjectif",
      entry: "roux",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "roux"
    },
    {
      type: "nom",
      entry: "roux",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "roux"
    },
    {
      type: "nom",
      entry: "roux",
      syllables: 1,
      gender: "m",
      number: "s",
      referenceEntry: "roux"
    }
  ],

  rousse: [
    {
      type: "nom",
      entry: "rousse",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "rousse"
    },
    {
      type: "nom",
      entry: "rousse",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "rousse"
    },
    {
      type: "nom",
      entry: "rousses",
      syllables: 1,
      gender: "f",
      number: "p",
      referenceEntry: "rousse"
    },
    {
      type: "adjectif",
      entry: "rousse",
      syllables: 1,
      gender: "f",
      number: "s",
      referenceEntry: "roux"
    },
    {
      type: "verbe",
      entry: "rousse",
      syllables: 1,
      infinitive: "rousser",
      mood: "i",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "rousse",
      syllables: 1,
      infinitive: "rousser",
      mood: "i",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "rousse",
      syllables: 1,
      infinitive: "rousser",
      mood: "s",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "rousse",
      syllables: 1,
      infinitive: "rousser",
      mood: "s",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "rousse",
      syllables: 1,
      infinitive: "rousser",
      mood: "m",
      tense: "p",
      person: "2",
      number: "s"
    }
  ],

  joignais: [
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      tense: "i",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      tense: "i",
      person: "2",
      number: "s"
    }
  ],

  joindre: [
    {
      type: "verbe",
      entry: "joignent",
      syllables: 1,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrais",
      syllables: 2,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignant",
      syllables: 2,
      infinitive: "joindre",
      mood: "p",
      tense: "p",
      person: undefined
    },
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joindront",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignirent",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindras",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignissent",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joigne",
      syllables: 1,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joindre",
      syllables: 1,
      infinitive: "joindre",
      mood: "n",
      person: undefined
    },
    {
      type: "verbe",
      entry: "joignîtes",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindra",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignît",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignes",
      syllables: 1,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignais",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joins",
      syllables: 1,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignisse",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignissiez",
      syllables: 3,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrions",
      syllables: 3,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrez",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignions",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joins",
      syllables: 1,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignîmes",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrai",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignent",
      syllables: 1,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignons",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joint",
      syllables: 1,
      infinitive: "joindre",
      mood: "p",
      tense: "s",
      number: "s",
      gender: "m"
    },

    {
      type: "verbe",
      entry: "joints",
      syllables: 1,
      infinitive: "joindre",
      mood: "p",
      tense: "s",
      number: "p",
      gender: "m"
    },

    {
      type: "verbe",
      entry: "jointe",
      syllables: 1,
      infinitive: "joindre",
      mood: "p",
      tense: "s",
      number: "s",
      gender: "f"
    },

    {
      type: "verbe",
      entry: "jointes",
      syllables: 1,
      infinitive: "joindre",
      mood: "p",
      tense: "s",
      number: "p",
      gender: "f"
    },
    {
      type: "verbe",
      entry: "joignit",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joindrait",
      syllables: 2,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignis",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joigniez",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrais",
      syllables: 2,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignissions",
      syllables: 3,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joigniez",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joins",
      syllables: 1,
      infinitive: "joindre",
      mood: "m",
      tense: "p",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joint",
      syllables: 1,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignons",
      syllables: 2,
      infinitive: "joindre",
      mood: "m",
      tense: "p",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindraient",
      syllables: 2,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joindrons",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "f",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignait",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "3",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignez",
      syllables: 2,
      infinitive: "joindre",
      mood: "m",
      tense: "p",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignions",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "1",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joigne",
      syllables: 1,
      infinitive: "joindre",
      mood: "s",
      tense: "p",
      person: "1",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joindriez",
      syllables: 3,
      infinitive: "joindre",
      mood: "c",
      tense: "p",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignisses",
      syllables: 2,
      infinitive: "joindre",
      mood: "s",
      tense: "i",
      person: "2",
      number: "s"
    },
    {
      type: "verbe",
      entry: "joignez",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "p",
      person: "2",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignaient",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "i",
      person: "3",
      number: "p"
    },
    {
      type: "verbe",
      entry: "joignis",
      syllables: 2,
      infinitive: "joindre",
      mood: "i",
      tense: "s",
      person: "2",
      number: "s"
    }
  ]
});
