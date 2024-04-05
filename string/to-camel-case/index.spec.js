import { describe, it, expect } from 'vitest'
import { toCamelCase } from '.'

describe('toCamelCase', () => {
  const expected = 'firstName'
  const testCases = [
    { expected: '', actual: null },
    { expected, actual: 'FirstName' },
    { expected, actual: 'first_name' },
    { expected, actual: 'FIRST_NAME' },
    { expected, actual: 'first-name' },
    { expected, actual: 'first name' },
    { expected, actual: 'First Name' }
  ]

  testCases.forEach(({ expected, actual }) => {
    it(`should convert "${actual}" to "${expected}"`, () => {
      expect(toCamelCase(actual)).toBe(expected)
    })
  })

  const notAStringValues = [
    { type: 'undefined', value: undefined },
    { type: 'number', value: 123 },
    { type: 'symbol', value: Symbol('a symbol as an object key') },
    { type: 'array', value: [] },
    { type: 'set', value: new Set() },
    { type: 'boolean', value: true },
    { type: 'object', value: {} },
    { type: 'function', value: () => {} }
  ]

  notAStringValues.forEach(({ type, value }) => {
    it(`"${type}" should throw exceptions`, () => {
      expect(() => toCamelCase(value)).toThrow(TypeError)
      expect(() => toCamelCase(value)).toThrow('Expected argument to be of type string')
    })
  })
})
