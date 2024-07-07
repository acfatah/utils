import { describe, expect, it } from 'vitest'
import { concatWords } from '../../../index.js'

describe('concatWords', () => {
  const withoutSeparatorInputMaps = [
    { input: null, expected: '' },
    { input: 'lorem ipsum', expected: 'lorem_ipsum' },
    { input: 'lorem123!@# Ipsum', expected: 'lorem123_Ipsum' },
  ]

  withoutSeparatorInputMaps.forEach(({ input, expected }) => {
    it(`should expect "${expected}" from "${input}" without separator`, () => {
      // @ts-expect-error Null value is included for testing
      expect(concatWords(input)).toBe(expected)
    })
  })

  const inputMaps = [
    { input: null, separator: '_', expected: '' },
    { input: '', separator: '_', expected: '' },
    { input: 'lorem Ipsum', separator: '_', expected: 'lorem_Ipsum' },
    { input: 'lorem ipsum', separator: '-', expected: 'lorem-ipsum' },
    {
      input: 'Lorem ipsum dolor sit amet.',
      separator: '-',
      expected: 'Lorem-ipsum-dolor-sit-amet',
    },
    {
      input: 'Lorem ipsum dolor sit amet.',
      separator: ', ',
      expected: 'Lorem, ipsum, dolor, sit, amet',
    },
    { input: 'FOO BAR', separator: '', expected: 'FOOBAR' },
    { input: 'FOO BAR', separator: '-', expected: 'FOO-BAR' },
    { input: 'FOO   BAR', separator: '_', expected: 'FOO_BAR' },
    { input: 'lorem_Ipsum', separator: '-', expected: 'lorem-Ipsum' },
    { input: 'lorem123 Ipsum', separator: '', expected: 'lorem123Ipsum' },
    { input: 'lorem bar-dolor', separator: '-', expected: 'lorem-bar-dolor' },
    { input: 'lorem bar-dolor', separator: '_', expected: 'lorem_bar_dolor' },
    { input: 'lorem bar_dolor', separator: '_', expected: 'lorem_bar_dolor' },
    { input: '$lorem123 !IpsumDolor -sit', separator: '-', expected: 'lorem123-IpsumDolor-sit' },
    { input: 'lorem ipsum', separator: '$$', expected: 'lorem$$ipsum' },
    { input: 'lorem ipsum', separator: '++', expected: 'lorem++ipsum' },
    { input: 'lorem ipsum', separator: '--', expected: 'lorem--ipsum' },
  ]

  inputMaps.forEach(({ input, separator, expected }) => {
    it(`should expect "${expected}" from "${input}" with separator "${separator}"`, () => {
      // @ts-expect-error Null value is included for testing
      expect(concatWords(input, separator)).toBe(expected)
    })
  })

  it('should runs transformer when provided', () => {
    const input = 'Lorem Ipsum Dolor Sit amet.'
    const expected = 'lorem-ipsum-dolor-sit-amet'
    const transformer = string => string.toLowerCase()

    expect(concatWords(input, '-', transformer)).toBe(expected)
  })
})
