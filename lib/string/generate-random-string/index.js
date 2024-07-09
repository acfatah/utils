import { getType } from '../../../index.js'

export function generateRandomString(option) {
  let length = 32
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const argumentType = getType(option)

  if (!['undefined', 'number', 'Object'].includes(argumentType)) {
    throw new TypeError('Invalid argument type')
  }

  if (argumentType === 'number') {
    length = option
  }

  if (argumentType === 'Object') {
    length = option.length ?? length
    characters = option.characters ?? characters
  }

  while (length--) {
    const randomIndex = Math.floor(Math.random() * characters.length)

    result += characters.charAt(randomIndex)
  }

  return result
}
