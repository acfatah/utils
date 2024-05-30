import { concatWords, splitWordsByCapitalLetter } from '../../index.js'

export function toKebabCase(string) {
  const result = splitWordsByCapitalLetter(string)

  return concatWords(result, '-', string => string.toLocaleLowerCase())
}
