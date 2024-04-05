import { ensureString } from '../ensure-string/index.js'
import { addSpaceBeforeCapitalLetter } from '../add-space-before-capital-letter/index.js'

export const toCamelCase = string => {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
    .toLowerCase()
    .replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())

  return result
}
