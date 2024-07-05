# `concatWords`

Combine words in a string, by default produce a valid Javascript variable name.

Use cases,

- SQL database, table and column naming
- Object key naming
- Directory and file naming
- Creating url slug

## Usage

`concatWords(string, separator?, transformer?)`

### strings

Type: `string`

It will assume spaces are the word separator.

#### separator?

Type: `string`
Default: `_`

#### transformer?

Type: `function`

Execute transformer function on each words before concantenation.
