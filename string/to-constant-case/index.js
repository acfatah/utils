import { concatWords } from '../concat-words/index.js'
import { ensureString } from '../ensure-string/index.js'
import { addSpaceBeforeCapitalLetter } from '../add-space-before-capital-letter/index.js'

export function toConstantCase(string) {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
  result = concatWords(result, '_', string => string.toUpperCase())

  return result
}
