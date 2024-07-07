import { describe, expect, it } from 'vitest'
import { deepTransformKeys } from '../../../index.js'

describe('deepTransformKeys', () => {
  it('should convert object keys', () => {
    const transformer = string => (typeof string === 'string' ? string?.toUpperCase() : string)

    const aSymbol = Symbol('a symbol as an object key')
    const expectedObject = {
      FULL_NAME: 'Foo Bar',
      123: '123',
      456: '456',
      [aSymbol]: 'a symbol',
    }

    const actualObject = {
      full_name: 'Foo Bar',
      123: '123',
      456: '456',
      [aSymbol]: 'a symbol',
    }

    expect(deepTransformKeys(actualObject, transformer)).toMatchObject(expectedObject)
  })

  it('should convert object keys recursively', () => {
    const transformer = string => (typeof string === 'string' ? string?.toUpperCase() : string)

    const expectedObject = {
      FULL_NAME: { FIRST_NAME: 'Foo', LAST_NAME: 'Bar' },
      REGISTERED_VEHICLES: [
        { TYPE: 'car', COLOR: 'red', REGISTRATION_NUMBER: 'ABC-123' },
        { TYPE: 'motorcycle', COLOR: 'blue', REGISTRATION_NUMBER: 'DEF-456' },
      ],
    }

    const actualObject = {
      full_name: { first_name: 'Foo', last_name: 'Bar' },
      registered_vehicles: [
        { type: 'car', color: 'red', registration_number: 'ABC-123' },
        { type: 'motorcycle', color: 'blue', registration_number: 'DEF-456' },
      ],
    }

    expect(deepTransformKeys(actualObject, transformer)).toMatchObject(expectedObject)
  })
})
