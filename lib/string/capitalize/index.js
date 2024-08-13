import { coerceToString } from '../../../index.js'

export function capitalize(string) {
  return coerceToString(string).replace(/(?:^|\b)([a-z])/g, (_, c) => c.toUpperCase())
}
