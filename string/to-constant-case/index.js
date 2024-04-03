import { concatWords } from '../concat-words'
import { ensureString } from '../ensure-string'

const addSpaceBeforeCapitalLetter = string => string.replace(/\B([A-Z][a-z])/g, ` $1`)

export const toConstantCase = string => {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
  result = concatWords(result, '_', string => string.toUpperCase())

  return result
}
