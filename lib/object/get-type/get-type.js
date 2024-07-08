import { OBJECT_TYPE_NAMES } from './index.js'

function getObjectPrototypeName(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1)

  // Primitive types don't have a prototype name
  return (OBJECT_TYPE_NAMES.includes(objectTypeName)) ? objectTypeName : typeof value
}

function isArray(value) {
  return !!value && Array.isArray(value)
}

export function getType(value) {
  // Since typeof null is 'object', we need to check for null first.
  if (value === null)
    return 'null'

  // Since typeof NaN is a number, we need to use Number.isNaN() to check for NaN value.
  if (Number.isNaN(value))
    return 'NaN'

  if (isArray(value))
    return 'Array'

  return getObjectPrototypeName(value)
}
