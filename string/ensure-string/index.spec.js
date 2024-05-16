import { describe, expect, it } from 'vitest'
import { ensureString } from '.'

describe('ensureString', () => {
  it('should return string as it is', () => {
    const result = ensureString('a string')

    expect(result).toBe('a string')
  })

  it('should turn null into an empty string', () => {
    const result = ensureString(null)

    expect(result).toBe('')
  })

  const notAStringValues = [
    { type: 'undefined', value: undefined },
    { type: 'number', value: 123 },
    { type: 'symbol', value: Symbol('a symbol as an object key') },
    { type: 'array', value: [] },
    { type: 'set', value: new Set() },
    { type: 'boolean', value: true },
    { type: 'object', value: {} },
    { type: 'function', value: () => {} },
  ]

  notAStringValues.forEach(({ type, value }) => {
    it(`"${type}" should throw TypeError`, () => {
      const expectEnsureString = expect(() => {
        ensureString(value)
      })

      expectEnsureString.toThrow(TypeError)
      expectEnsureString.toThrow(/Expected argument to be of type string/)
    })
  })
})
