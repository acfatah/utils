import { describe, expect, it } from 'vitest'
import { invalidSpreadsheetColumns, spreadsheetColumns } from '../__tests__/fixtures.js'
import { indexToColumn } from './index.js'

describe('indexToColumn', () => {
  spreadsheetColumns.forEach(({ number, letter }) => {
    it(`should convert index ${number} to letter ${letter}`, () => {
      expect(indexToColumn(number)).toBe(letter)
    })
  })

  invalidSpreadsheetColumns.forEach(({ description, value }) => {
    it(`should throw TypeError if ${description} is passed`, () => {
      const expected = expect(() => indexToColumn(value))
      expected.toThrow(TypeError)
      expected.toThrow('Expected argument to be of type number')
    })
  })

  it('should throw RangeError if the number is less than 1', () => {
    const expected = expect(() => indexToColumn(0))
    expected.toThrow(RangeError)
    expected.toThrow('Expected argument to be greater than 0')
  })
})
