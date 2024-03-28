export const generateRandomString = ({
  length = 32,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
  symbols = '-_',
  includeSymbols = false
} = {}) => {
  let result = ''

  // Combine characters and symbols if includeSymbols is true
  const characterSet = includeSymbols ? characters + symbols : characters

  while (length--) {
    const randomIndex = Math.floor(Math.random() * characterSet.length)

    result += characterSet.charAt(randomIndex)
  }

  return result
}
