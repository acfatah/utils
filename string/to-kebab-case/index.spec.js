import { describe, it, expect } from 'vitest'
import { toKebabCase } from '.'

describe('toKebabCase', () => {
  const expected = 'first-name'
  const testCases = [
    { expected: '', actual: null },
    { expected, actual: 'firstName' },
    { expected, actual: 'FirstName' },
    { expected, actual: 'first_name' },
    { expected, actual: 'FIRST_NAME' },
    { expected, actual: 'first-name' },
    { expected, actual: 'first name' },
    { expected, actual: 'First Name' },
    { expected: 'lorem-ipsum-dolor-sit-amet', actual: 'Lorem! Ipsum, % Dolor Sit amet.' }
  ]

  testCases.forEach(({ expected, actual }) => {
    it(`should convert "${actual}" to "${expected}"`, () => {
      expect(toKebabCase(actual)).toBe(expected)
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
      expect(() => toKebabCase(value)).toThrow(TypeError)
      expect(() => toKebabCase(value)).toThrow('Expected argument to be of type string')
    })
  })
})
