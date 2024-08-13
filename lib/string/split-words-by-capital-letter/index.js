import { coerceToString, toSpaceCase } from '../../../index.js'

export function splitWordsByCapitalLetter(string) {
  let result = coerceToString(string)
  result = toSpaceCase(result)

  return result
}
