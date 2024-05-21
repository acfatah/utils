import { splitWordsByCapitalLetter } from '../split-words-by-capital-letter'
import { concatWords } from '../concat-words'

export function toSnakeCase(string) {
  const result = splitWordsByCapitalLetter(string)

  return concatWords(result, '_', string => string.toLocaleLowerCase())
}
