import { deepTransformKeys } from '../deep-transform-keys/index.js'
import { toPascalCase } from '../../string/to-pascal-case/index.js'

export const deepPascalCaseKeys = object => deepTransformKeys(object, toPascalCase)
