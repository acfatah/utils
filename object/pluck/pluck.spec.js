import { describe, expect, it } from 'vitest'
import { pluck, strictPluck } from '../../index.js'

const testCases = [
  {
    description: 'should return an array of values for the given key',
    expected: [1, 2, 3],
    actual: pluck([{ id: 1 }, { id: 2 }, { id: 3 }], 'id'),
  },

  {
    description: 'should return an array of array values for more than one string as key',
    expected: [[1, 'one'], [2, 'two'], [3, 'three']],
    actual: pluck([{ id: 1, name: 'one' }, { id: 2, name: 'two' }, { id: 3, name: 'three' }], 'id', 'name'),
  },
]

const exceptionCases = [
  {
    description: 'should throw error when first argument is not an array',
    test: () => {
      pluck('a string', 'id')
    },
    errorMessage: 'Argument supplied is not an array.',
  },

  {
    description: 'should throw error when the option is strict and the array contains non-iterable element for an argument input',
    test: () => {
      const options = { strict: true }
      pluck([{ id: 1, name: 'one' }, 2, { id: 3, name: 'three' }], 'id', options)
    },
    errorMessage: 'Invalid object supplied at index 1.',
  },

  {
    description: 'should throw error when the option is strict and the array contains non-iterable element for multiple arguments input',
    test: () => {
      const options = { strict: true }
      pluck([{ id: 1, name: 'one' }, 2, { id: 3, name: 'three' }], 'id', 'name', options)
    },
    errorMessage: 'Invalid object supplied at index 1.',
  },

  {
    description: 'should throw error when the option is strict and the plucked key is not present within the element',
    test: () => {
      const options = { strict: true }
      pluck([{ id: 1, name: 'one' }, { id: 2 }, { id: 3, name: 'three' }], 'id', 'name', options)
    },
    errorMessage: 'Object without key "name" supplied at index 1.',
  },

  {
    description: 'should throw error when using strictPluck alias to pluck a single key and the plucked key is not present within the element',
    test: () => {
      strictPluck([{ id: 1, name: 'one' }, { id: 2 }, { id: 3, name: 'three' }], 'name')
    },
    errorMessage: 'Object without key "name" supplied at index 1.',
  },

  {
    description: 'should throw error when using strictPluck alias to pluck multiple keys and some of the plucked key is not present within the element',
    test: () => {
      strictPluck([{ id: 1, name: 'one' }, { id: 2 }, { id: 3, name: 'three' }], 'id', 'name')
    },
    errorMessage: 'Object without key "name" supplied at index 1.',
  },
]

describe('pluck', () => {
  testCases.forEach(({ description, expected, actual }) => {
    it(description, () => {
      expect(actual).toEqual(expected)
    })
  })

  exceptionCases.forEach(({ description, test, errorMessage }) => {
    it(description, () => {
      expect(test).toThrow(errorMessage)
    })
  })
})
