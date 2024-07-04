import { describe, expect, it } from 'vitest'
import { invalidSpreadsheetColumns, spreadsheetColumns } from '../__tests__/fixtures.js'
import { columnToIndex } from './index.js'

describe('columnToIndex', () => {
  spreadsheetColumns.forEach(({ number, letter }) => {
    it(`should convert column ${letter} to index ${number}`, () => {
      expect(columnToIndex(letter)).toBe(number)
    })
  })

  invalidSpreadsheetColumns.forEach(({ description, value }) => {
    it(`should TypeError if ${description} is passed`, () => {
      const expected = expect(() => columnToIndex(value))
      expected.toThrow(TypeError)
      expected.toThrow(`Invalid column spreadsheet letters`)
    })
  })
})
