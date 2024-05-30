import { describe, expect, it } from 'vitest'
import { isKeysIterable } from '../../index.js'

describe('isKeysIterable', () => {
  const iterableInputMaps = [
    { input: 'Array', value: [], expected: true },
    { input: 'Object', value: {}, expected: true },
  ]

  iterableInputMaps.forEach(({ input, value, expected }) => {
    it(`should return true for an input type of ${input}`, () => {
      expect(isKeysIterable(value)).toBe(expected)
    })
  })

  const nonIterableInputMaps = [
    { input: 'Number', value: 123, expected: false },
    { input: 'null', value: null, expected: false },
    { input: 'Date', value: new Date(), expected: false },
    { input: 'Regex', value: /regex/, expected: false },
    { input: 'Map', value: new Map(), expected: false },
    { input: 'Set', value: new Set(), expected: false },
    { input: 'WeakMap', value: new WeakMap(), expected: false },
    { input: 'WeakSet', value: new WeakSet(), expected: false },
  ]

  nonIterableInputMaps.forEach(({ input, value, expected }) => {
    it(`should return false for an input type of ${input}`, () => {
      expect(isKeysIterable(value)).toBe(expected)
    })
  })
})
