import { concatWords, ensureString, toSpaceCase } from '../../../index.js'

export function toPascalCase(string) {
  let result = ensureString(string)
  result = toSpaceCase(result)
  result = ` ${result.toLowerCase()}`
  result = result.replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())
  result = concatWords(result)

  return result
}
