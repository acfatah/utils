import { describe, expect, it } from 'vitest'
import { toConstantCase } from '../../index.js'

describe('toConstantCase', () => {
  const expectedValue = 'FIRST_NAME'
  const testCases = [
    { expectedValue: '', actualValue: null },
    { expectedValue, actualValue: 'first-name' },
    { expectedValue, actualValue: 'first_name' },
    { expectedValue, actualValue: 'firstName' },
    { expectedValue, actualValue: 'first name' },
    { expectedValue, actualValue: 'First Name' },
  ]

  testCases.forEach(({ expectedValue, actualValue }) => {
    it(`should convert "${actualValue}" to "${expectedValue}"`, () => {
      expect(toConstantCase(actualValue)).toBe(expectedValue)
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
      expect(() => toConstantCase(value)).toThrow(TypeError)
      expect(() => toConstantCase(value)).toThrow('Expected argument to be of type string')
    })
  })
})
