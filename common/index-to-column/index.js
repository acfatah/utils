export function indexToColumn(index) {
  if (Number.isNaN(index) || typeof index !== 'number')
    throw new TypeError('Expected argument to be of type number')

  if (index < 1)
    throw new RangeError('Expected argument to be greater than 0')

  const mod = index % 26
  let pow = index / 26 | 0
  const chr = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z')

  return pow ? indexToColumn(pow) + chr : chr
}
