import { describe, expect, it } from 'vitest'
import { splitWordsByCapitalLetter } from '../../../index.js'

describe('splitWordsByCapitalLetter', () => {
  it('should add space before each capital letter in a string', () => {
    expect(splitWordsByCapitalLetter('HelloWorld')).toBe('Hello World')
    expect(splitWordsByCapitalLetter('JavaScriptIsFun')).toBe('Java Script Is Fun')
  })

  it('should handle strings with already existing spaces', () => {
    expect(splitWordsByCapitalLetter('Hello World')).toBe('Hello World')
    expect(splitWordsByCapitalLetter('Java Script Is Fun')).toBe('Java Script Is Fun')
  })

  it('should handle empty string', () => {
    expect(splitWordsByCapitalLetter('')).toBe('')
  })

  it('should handle null', () => {
    expect(splitWordsByCapitalLetter(null)).toBe('')
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
        splitWordsByCapitalLetter(value)
      })

      expectEnsureString.toThrow(TypeError)
      expectEnsureString.toThrow(/Expected argument to be of type string/)
    })
  })
})
