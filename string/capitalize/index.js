import { ensureString } from '../ensure-string/index.js'

export const capitalize = string =>
  ensureString(string).replace(/(?:^|\b)([a-z])/g, (_, c) => c.toUpperCase())




