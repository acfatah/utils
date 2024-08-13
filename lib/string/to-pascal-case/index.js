import { coerceToString, concatWords, toSpaceCase } from '../../../index.js'

export function toPascalCase(string) {
  let result = coerceToString(string)
  result = toSpaceCase(result)
  result = ` ${result.toLowerCase()}`
  result = result.replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())
  result = concatWords(result)

  return result
}
