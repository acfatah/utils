import { deepTransformKeys } from '../deep-transform-keys/index.js'
import { toCamelCase } from '../../string/to-camel-case/index.js'

export const deepCamelCaseKeys = object => deepTransformKeys(object, toCamelCase)
