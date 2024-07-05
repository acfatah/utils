import { isKeysIterable } from '../../../index.js'

function pluckMultipleKeys(arrayOfObjects, keys, strict = false) {
  return arrayOfObjects.reduce((accumulator, current, index) => {
    const results = []

    if (strict && !isKeysIterable(current))
      throw new Error(`Invalid object supplied at ${index}.`)

    keys.forEach((key, index) => {
      if (strict && !Object.keys(current).includes(key))
        throw new Error(`Key ${key} is not present at ${index}.`)

      results.push(current[key])
    })

    accumulator.push(results)

    return accumulator
  }, [])
}

function pluckSingleKey(arrayOfObjects, key, strict = false) {
  return arrayOfObjects.reduce((accumulator, current, index) => {
    if (strict && !isKeysIterable(current))
      throw new Error(`Invalid object supplied at ${index}.`)

    accumulator.push(current[key])

    return accumulator
  }, [])
}

export function pluck(arrayOfObjects, ...keys) {
  const lastKey = keys?.[keys?.length - 1]
  const strict = (typeof lastKey === 'object') && !!lastKey?.strict

  if (!Array.isArray(arrayOfObjects))
    throw new TypeError('Argument supplied is not an array.')

  if (typeof lastKey === 'object' && !Array.isArray(lastKey))
    keys = keys.slice(0, -1)

  if (keys.length < 2)
    return pluckSingleKey(arrayOfObjects, keys, strict)

  return pluckMultipleKeys(arrayOfObjects, keys, strict)
}

export function strictPluck(arrayOfObjects, ...keys) {
  return pluck(arrayOfObjects, ...keys, { strict: true })
}
