import { ensureString } from '../../../index.js'

const addSpaceBeforeCapitalLetter = string => string.replace(/\B([A-Z][a-z])/g, ` $1`)

export function splitWordsByCapitalLetter(string) {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)

  return result
}
