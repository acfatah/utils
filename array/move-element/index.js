export function moveElement(array, fromIndex, toIndex) {
  const elementToMove = array[fromIndex]

  array.splice(fromIndex, 1)
  array.splice(toIndex, 0, elementToMove)

  return array
}
