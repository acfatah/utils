export function transformKeys(object, transformer) {
  if (object == null || typeof object !== 'object')
    throw new TypeError('Expected argument to be of type object')

  return Object.keys(object).reduce(
    (result, key) => Object.assign(result, { [transformer(key)]: object[key] }),
    {},
  )
}
