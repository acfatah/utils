import { deepTransformKeys, toSnakeCase } from '../../../index.js'

export const deepSnakeCaseKeys = object => deepTransformKeys(object, toSnakeCase)
