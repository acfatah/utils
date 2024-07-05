import { concatWords, splitWordsByCapitalLetter } from '../../../index.js'

export function toSnakeCase(string) {
  const result = splitWordsByCapitalLetter(string)

  return concatWords(result, '_', string => string.toLocaleLowerCase())
}
