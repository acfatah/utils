import { addSpaceBeforeCapitalLetter, ensureString } from '../../../index.js'

export function toCamelCase(string) {
  let result = ensureString(string)
  result = addSpaceBeforeCapitalLetter(result)
    .toLowerCase()
    .replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())

  return result
}
