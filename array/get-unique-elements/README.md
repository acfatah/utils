# `getUniqueElements`

Returns an array containing unique elements from the input arrays.

## Usage

`getUniqueElements(...arrays)`

### `arrays`

Type: `array`

Accept one or more arrays.

### return

Type: `array`

## One-liner Snippet

```javascript
const getUniqueElements = (...arr) => [...new Set([].concat(...arr))]
```
