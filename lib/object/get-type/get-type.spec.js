import { describe, expect, it } from 'vitest'
import { getType } from '../../../index.js'
import { fixtures } from './__tests__/fixtures.js'

describe('getType', () => {
  fixtures.forEach(({ name, valueType, value }) => {
    it(`${name} should return ${valueType}`, () => {
      expect(getType(value)).toBe(valueType)
    })
  })
})
