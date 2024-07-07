import { describe, expect, it } from 'vitest'
import { generateRandomString } from '../../../index.js'

describe('generateRandomString', () => {
  const length = 12
  const characters = 'abcd'
  const str = generateRandomString({ length, characters })

  it('should generates a string with specified length', () => {
    expect(str).toHaveLength(length)
  })

  it('should generates a string with specified characters', () => {
    for (const char of str)
      expect(characters).toContain(char)
  })
})
