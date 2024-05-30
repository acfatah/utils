import { concatWords, splitWordsByCapitalLetter } from '../../index.js'

export function toConstantCase(string) {
  const result = splitWordsByCapitalLetter(string)

  return concatWords(result, '_', string => string.toLocaleUpperCase())
}
