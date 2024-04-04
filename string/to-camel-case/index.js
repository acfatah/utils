import { ensureString } from '../ensure-string/index.js'

export const toCamelCase = string => {
  let result = ensureString(string)
    .toLowerCase()
    .replace(/([-_.\s][a-z0-9])/g, char => char[1].toUpperCase())

  return result
}
