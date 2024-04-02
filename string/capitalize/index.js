import { ensureString } from '../ensure-string'

export const capitalize = string =>
  ensureString(string).replace(/(?:^|\b)([a-z])/g, (_, c) => c.toUpperCase())
