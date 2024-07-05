export function columnToIndex(column) {
  if (!/^[A-Z]+$/.test(column))
    throw new TypeError('Invalid column spreadsheet letters')

  return column
    .split('')
    .reverse()
    .reduce((acc, char, index) => acc + (char.charCodeAt(0) - 64) * 26 ** index, 0)
}
