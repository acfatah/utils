import { deepTransformKeys, toPascalCase } from '../../index.js'

export const deepPascalCaseKeys = object => deepTransformKeys(object, toPascalCase)
