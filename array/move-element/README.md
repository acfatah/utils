# `moveElement`

Moves an element within an array from one index to another.

## Usage

```
moveElement(array, fromIndex, toIndex)
```

### array

Type: `array`

The array to modify.

### fromIndex

Type: `number`

The index of the element to move.

### toIndex

Type: `number`

The index to move the element to.

### return

Type: `array`

The resulting array.

## One-liner Snippet

```javascript
const moveElement = (array, from, to) => array.splice(to, 0, array.splice(from, 1)[0])
```
