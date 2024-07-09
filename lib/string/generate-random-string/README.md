# `generateRandomString(option?: number | Object)`

Simple method to generate a random string of specified length or with customizable characters and length.

## `option?: number | Object`

If `option` is a number, it's the length of the generated string.
If `option` is an object, it can have the following properties:

### `option.length`

Type: `number`
Default: 32

The length of the generated string.

### `option.characters`

Type: `string`
Default: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

The set of characters to use for generating the string.

## `returns: string`

The generated random string.
