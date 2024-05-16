import { describe, expect, it } from 'vitest'
import { moveElement } from '.'

describe('moveElement', () => {
  it('should move an element to the new index', () => {
    const array = [1, 2, 3, 4, 5]
    const fromIndex = 1
    const toIndex = 3
    const expectedArray = [1, 3, 4, 2, 5]
    const actualArray = moveElement(array, fromIndex, toIndex)

    expect(actualArray).toHaveLength(expectedArray.length)
    expect(actualArray).toEqual(expectedArray)
  })
})
