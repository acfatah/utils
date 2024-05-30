import { ensureString } from '../../index.js'

const removeNonWordChars = input => input.replace(/[^a-z0-9]+/gi, ' ')
const trimString = input => input.trim()

const escapedRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, '$&')

function replaceSpacesWithSeparator(input, separator) {
  const escapedDolar
    = separator[separator.length - 1] === '$' ? `${separator}$` : escapedRegExp(separator)

  return input.replace(/\s+/g, escapedDolar)
}

/**
 * @param {string} string
 * @param {string} [separator]
 * @param {Function} [transformer]
 * @returns {string} Concantenated string
 */
export function concatWords(string, separator = '_', transformer = undefined) {
  let result = ensureString(string)
  result = removeNonWordChars(result)
  result = trimString(result)

  if (transformer && typeof transformer === 'function')
    result = transformer(result)

  result = replaceSpacesWithSeparator(result, separator)

  return result
}
