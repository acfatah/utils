import { ensureString, toSpaceCase } from '../../../index.js'

export function toCamelCase(string) {
  let result = ensureString(string)
  result = toSpaceCase(result)
    .toLowerCase()
    .replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())

  return result
}
