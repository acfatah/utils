import { describe, expect, it } from 'vitest'
import { toSpaceCase } from '../../../index.js'

describe('toSpaceCase', () => {
  it('should add space before each capital letter in a string', () => {
    expect(toSpaceCase('HelloWorld')).toBe('Hello World')
    expect(toSpaceCase('JavaScriptIsFun')).toBe('Java Script Is Fun')
  })

  it('should handle strings with already existing spaces', () => {
    expect(toSpaceCase('Hello World')).toBe('Hello World')
    expect(toSpaceCase('Java Script Is Fun')).toBe('Java Script Is Fun')
  })

  it('should handle empty string', () => {
    expect(toSpaceCase('')).toBe('')
  })
})
