export function coerceToString(value) {
  if (value === null)
    return ''

  if (typeof value !== 'string')
    throw new TypeError('Expected argument to be of type string')

  return value
}
