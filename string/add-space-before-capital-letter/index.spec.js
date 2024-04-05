import { describe, it, expect } from 'vitest'
import { addSpaceBeforeCapitalLetter } from '.'

describe('addSpaceBeforeCapitalLetter', () => {
  it('should add space before each capital letter in a string', () => {
    expect(addSpaceBeforeCapitalLetter('HelloWorld')).toBe('Hello World')
    expect(addSpaceBeforeCapitalLetter('JavaScriptIsFun')).toBe('Java Script Is Fun')
  })

  it('should handle strings with already existing spaces', () => {
    expect(addSpaceBeforeCapitalLetter('Hello World')).toBe('Hello World')
    expect(addSpaceBeforeCapitalLetter('Java Script Is Fun')).toBe('Java Script Is Fun')
  })

  it('should handle empty string', () => {
    expect(addSpaceBeforeCapitalLetter('')).toBe('')
  })
})
