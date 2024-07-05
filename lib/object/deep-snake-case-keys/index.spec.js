import { describe, expect, it } from 'vitest'
import { deepSnakeCaseKeys } from '../../../index.js'

describe('deepSnakeCaseKeys', () => {
  it('should convert object keys', () => {
    const aSymbol = Symbol('a symbol as an object key')
    const expectedObject = {
      full_name: 'Foo Bar',
      123: '123',
      456: '456',
      [aSymbol]: 'a symbol',
    }

    const actualObject = {
      fullName: 'Foo Bar',
      123: '123',
      456: '456',
      [aSymbol]: 'a symbol',
    }

    expect(deepSnakeCaseKeys(actualObject)).toMatchObject(expectedObject)
  })

  it('should convert object keys recursively', () => {
    const expectedObject = {
      full_name: { first_name: 'Foo', last_name: 'Bar' },
      registered_vehicles: [
        { type: 'car', color: 'red', registration_number: 'ABC-123' },
        { type: 'motorcycle', color: 'blue', registration_number: 'DEF-456' },
      ],
    }

    const actualObject = {
      fullName: { firstName: 'Foo', lastName: 'Bar' },
      registeredVehicles: [
        { type: 'car', color: 'red', registrationNumber: 'ABC-123' },
        { type: 'motorcycle', color: 'blue', registrationNumber: 'DEF-456' },
      ],
    }

    expect(deepSnakeCaseKeys(actualObject)).toMatchObject(expectedObject)
  })
})
