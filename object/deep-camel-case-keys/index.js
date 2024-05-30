import { deepTransformKeys, toCamelCase } from '../../index.js'

export const deepCamelCaseKeys = object => deepTransformKeys(object, toCamelCase)
