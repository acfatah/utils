import { ensureString, toSpaceCase } from '../../../index.js'

export function splitWordsByCapitalLetter(string) {
  let result = ensureString(string)
  result = toSpaceCase(result)

  return result
}
