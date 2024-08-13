# Debounce Function

## Overview

A JavaScript function to debounce excessive function calls.

### Description

This function takes a `callback` function and a `delay` time as arguments, and returns a new function that will wait for the specified `delay` time before executing the original `callback` function.

If the returned function is called again before the `delay` time has passed, the previous execution is cancelled, and the timer is reset.

### Usage

```javascript
import debounce from '@acfatah/utils'

const debouncedFunction = debounce((...args) => {
  // code to be executed
}, 500) // 500ms delay

// Call the debounced function
debouncedFunction('arg1', 'arg2')
```

### API

#### `debounce(callback, delay)`

- `callback`: the function to be debounced
- `delay`: the time in milliseconds to wait before executing the callback

Returns a new function that will debounce the original callback.

### Example Use Cases

- Handling user input (e.g. search queries, form submissions)
- Window resizing events
- Preventing excessive API calls

### Notes

- You can modify the `delay` time to suit your specific use case.
