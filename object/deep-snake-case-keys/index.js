import { deepTransformKeys } from '../deep-transform-keys/index.js'
import { toSnakeCase } from '../../string/to-snake-case/index.js'

export const deepSnakeCaseKeys = object => deepTransformKeys(object, toSnakeCase)
