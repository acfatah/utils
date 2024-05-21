import { splitWordsByCapitalLetter } from '../split-words-by-capital-letter'
import { concatWords } from '../concat-words'

export function toKebabCase(string) {
  const result = splitWordsByCapitalLetter(string)

  return concatWords(result, '-', string => string.toLocaleLowerCase())
}
