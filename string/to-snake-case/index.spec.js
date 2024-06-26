import { describe, expect, it } from 'vitest'
import { toSnakeCase } from '../../index.js'

describe('toSnakeCase', () => {
  const expected = 'first_name'
  const testCases = [
    { expected: '', actual: null },
    { expected, actual: 'FirstName' },
    { expected, actual: 'firstName' },
    { expected, actual: 'FIRST_NAME' },
    { expected, actual: 'first-name' },
    { expected, actual: 'first name' },
    { expected, actual: 'First Name' },
  ]

  testCases.forEach(({ expected, actual }) => {
    it(`should convert "${actual}" to "${expected}"`, () => {
      expect(toSnakeCase(actual)).toBe(expected)
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
    { type: 'function', value: () => {} },
  ]

  notAStringValues.forEach(({ type, value }) => {
    it(`"${type}" should throw exceptions`, () => {
      expect(() => toSnakeCase(value)).toThrow(TypeError)
      expect(() => toSnakeCase(value)).toThrow('Expected argument to be of type string')
    })
  })
})
