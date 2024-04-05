import { ensureString } from '../ensure-string/index.js'
import { addSpaceBeforeCapitalLetter } from '../add-space-before-capital-letter/index.js'
import { concatWords } from '../concat-words/index.js'

export const toKebabCase = string => {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
  result = concatWords(result, '-', string => string.toLowerCase())

  return result
}
