import { ensureString } from '../ensure-string/index.js'

export function capitalize(string) {
  return ensureString(string).replace(/(?:^|\b)([a-z])/g, (_, c) => c.toUpperCase())
}
