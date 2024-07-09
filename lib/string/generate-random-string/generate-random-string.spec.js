import { describe, expect, it } from 'vitest'
import { generateRandomString } from '../../../index.js'

describe('generateRandomString', () => {
  const DEFAULT_LENGTH = 32

  it('should generates a string with default length and characters', () => {
    expect(generateRandomString()).toHaveLength(DEFAULT_LENGTH)
  })

  it('should generate a string with a specified length', () => {
    const lengths = [4, 16, 64, 256]

    lengths.forEach((length) => {
      const str = generateRandomString(length)

      expect(str).toHaveLength(length)
    })
  })

  it('should generates a string with specified length and characters option', () => {
    const lengths = [4, 16, 64, 256]
    const characters = 'xy#'

    lengths.forEach((length) => {
      const str = generateRandomString({ length })

      expect(str).toHaveLength(length)
    })

    lengths.forEach((length) => {
      const str = generateRandomString({ length, characters })

      expect(str).toHaveLength(length)
    })
  })

  it('should generates a string with specified characters', () => {
    const characters = 'x#'
    const str = generateRandomString({ characters })

    for (const char of str)
      // This test can randomly fail if the characters are not in the array
      expect(characters).toContain(char)
  })

  const invalidArgumentTypes = [
    { type: 'NaN', value: Number.NaN },
    { type: 'string', value: '32' },
  ]

  invalidArgumentTypes.forEach(({ type, value }) => {
    it(`should throws TypeError with invalid argument type "${type}"`, () => {
      const expectGenerateRandomString = expect(() => {
        generateRandomString(value)
      })

      expectGenerateRandomString.toThrow(TypeError)
      expectGenerateRandomString.toThrow('Invalid argument type')
    })
  })
})
