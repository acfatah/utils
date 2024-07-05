import { ensureString } from '../../../index.js'

export function capitalize(string) {
  return ensureString(string).replace(/(?:^|\b)([a-z])/g, (_, c) => c.toUpperCase())
}
