import { describe, expect, it } from 'vitest'
import { transformKeys } from '.'

describe('transformKeys', () => {
  it('should transform keys of an object', () => {
    const obj = { foo: 'bar', baz: 'qux' }
    const transformer = key => key.toUpperCase()

    const result = transformKeys(obj, transformer)

    expect(result).toEqual({ FOO: 'bar', BAZ: 'qux' })
  })

  it('should handle an empty object', () => {
    const obj = {}
    const transformer = key => key.toUpperCase()

    const result = transformKeys(obj, transformer)

    expect(result).toEqual({})
  })

  it('should handle a null object', () => {
    const obj = null
    const transformer = key => key.toUpperCase()

    const expectTransformKeys = expect(() => transformKeys(obj, transformer))

    expectTransformKeys.toThrow(TypeError)
    expectTransformKeys.toThrow(/Expected argument to be of type object/)
  })

  it('should handle a non-object input', () => {
    const obj = 'not an object'
    const transformer = key => key.toUpperCase()

    const expectTransformKeys = expect(() => transformKeys(obj, transformer))

    expectTransformKeys.toThrow(TypeError)
    expectTransformKeys.toThrow(/Expected argument to be of type object/)
  })
})
