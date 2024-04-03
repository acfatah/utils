import { ensureString } from '../ensure-string/index.js'

const removeNonWordChars = input => input.replace(/[^a-zA-Z0-9]+/g, ' ')
const trimString = input => input.trim()

const escapedRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '$&')

const replaceSpacesWithSeparator = (input, separator) => {
  const escapedDolar =
    separator[separator.length - 1] === '$' ? separator + '$' : escapedRegExp(separator)

  return input.replace(/\s+/g, escapedDolar)
}

/**
 * @param {string} string
 * @param {string} [separator='_']
 * @param {Function} [transformer=null]
 * @returns {string}
 */
export const concatWords = (string, separator = '_', transformer = undefined) => {
  let result = ensureString(string)
  result = removeNonWordChars(result)
  result = trimString(result)

  if (transformer && typeof transformer === 'function') result = transformer(result)

  result = replaceSpacesWithSeparator(result, separator)

  return result
}
