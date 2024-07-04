export const spreadsheetColumns = [
  { number: 1, letter: 'A' },
  { number: 26, letter: 'Z' },
  { number: 27, letter: 'AA' },
  { number: 100, letter: 'CV' },
  { number: 500, letter: 'SF' },
  { number: 702, letter: 'ZZ' },
  { number: 702, letter: 'ZZ' },

  // Excel 2007 limit
  { number: 16384, letter: 'XFD' },
]

export const invalidSpreadsheetColumns = [
  { description: 'number as string', value: '10' },
  { description: 'symbol characters', value: '##' },
  { description: 'lower case letters', value: 'aa' },
  { description: 'empty string', value: '' },
  { description: 'unicode characters', value: '\u20AC\u20AC' },
  { description: 'null', value: null },
  { description: 'NaN', value: Number.NaN },
  { description: 'true', value: true },
  { description: 'false', value: false },
  { description: 'object', value: {} },
  { description: 'array', value: [] },
]
