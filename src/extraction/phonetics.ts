const SYLLABLE_SEPARATOR = ".";

export function countSyllables(pronunciation?: string): number | undefined {
  if (!pronunciation) {
    return undefined;
  }

  let syllableSeparators = 0;

  for (const character of pronunciation) {
    if (character == SYLLABLE_SEPARATOR) {
      syllableSeparators++;
    }
  }

  return syllableSeparators + 1;
}
