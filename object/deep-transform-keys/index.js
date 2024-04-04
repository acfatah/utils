import { isKeysIterable } from '../is-keys-iterable/index.js'

const transformArrayKeys = (transformer, array) => {
  return array.map(value => deepTransformKeys(value, transformer))
}

export const deepTransformKeys = (object, transformer) => {
  if (!isKeysIterable(object)) return object

  if (Array.isArray(object)) {
    return transformArrayKeys(transformer, object)
  }

  return Object.keys(object).reduce((acc, key) => {
    acc[transformer(key)] = deepTransformKeys(object[key], transformer)
    return acc
  }, {})
}
