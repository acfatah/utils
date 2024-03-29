export const getUniqueElements = (...arr) => {
  const concatenatedArr = [].concat(...arr)
  const uniqueSet = new Set(concatenatedArr)
  const uniqueElements = [...uniqueSet]

  return uniqueElements
}
