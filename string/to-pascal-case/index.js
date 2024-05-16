import { ensureString } from '../ensure-string/index.js'
import { concatWords } from '../concat-words/index.js'
import { addSpaceBeforeCapitalLetter } from '../add-space-before-capital-letter/index.js'

export function toPascalCase(string) {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
  result = ` ${result.toLowerCase()}`
  result = result.replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())
  result = concatWords(result)

  return result
}
