# `generateRandomString`

Generates a random string of specified length.

## Usage

`generateRondomString(options?)`

### options

Type: `object`

#### `options.length`

Type: `number`
Default: 32

The length of the generated string.

#### `options.characters`

Type: `string`
Default: `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

The set of characters to use for generating the string.

#### `options.symbols`

Type: `string`
Default: `-_`

The set of symbols to include in the character set.

#### `options.includeSymbols`

Type: `boolean`
Default: `false`

Whether to include symbols in the character set.
