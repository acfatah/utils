export const addSpaceBeforeCapitalLetter = string => string.replace(/\B([A-Z][a-z])/g, ` $1`)
