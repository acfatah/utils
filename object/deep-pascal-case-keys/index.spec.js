import { describe, expect, it } from 'vitest'
import { deepPascalCaseKeys } from '../../index.js'

describe('deepPascalCaseKeys', () => {
  it('should convert object keys', () => {
    const aSymbol = Symbol('a symbol as an object key')
    const expectedObject = {
      FullName: 'Foo Bar',
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

    expect(deepPascalCaseKeys(actualObject)).toMatchObject(expectedObject)
  })

  it('should convert object keys recursively', () => {
    const expectedObject = {
      FullName: { FirstName: 'Foo', LastName: 'Bar' },
      RegisteredVehicles: [
        { Type: 'car', Color: 'red', RegistrationNumber: 'ABC-123' },
        { Type: 'motorcycle', Color: 'blue', RegistrationNumber: 'DEF-456' },
      ],
    }

    const actualObject = {
      fullName: { firstName: 'Foo', lastName: 'Bar' },
      registeredVehicles: [
        { type: 'car', color: 'red', registrationNumber: 'ABC-123' },
        { type: 'motorcycle', color: 'blue', registrationNumber: 'DEF-456' },
      ],
    }

    expect(deepPascalCaseKeys(actualObject)).toMatchObject(expectedObject)
  })
})
