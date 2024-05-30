import { describe, expect, it } from 'vitest'
import { getUniqueElements } from '../../index.js'

describe('getUniqueElements', () => {
  it('should return an array with unique elements', () => {
    const array1 = [1, 2, 3, 4, 5]
    const array2 = [3, 4, 5, 6, 7]
    const expectedArray = [1, 2, 3, 4, 5, 6, 7]
    const result = getUniqueElements(array1, array2)

    for (let i = 0; i < result.length; i++)
      expect(result[i]).toEqual(expectedArray[i])
  })
})
