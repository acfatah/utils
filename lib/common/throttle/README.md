# Throttle Function

## Overview

A JavaScript throttle function that limits the execution of a given callback function to a specified delay.

### Description

The throttle function returns a new function that, when called, will only execute the original callback function once within a specified delay time. This is useful for preventing excessive function calls, such as in event handlers or API requests.

### Usage

To use the throttle function, simply call it with the callback function and delay time as arguments. The returned function can then be used as needed.

### API

#### `throttle(callback, delay)`

- `callback`: The function to be throttled.
- `delay`: The time in milliseconds to wait between each execution of the `callback`.

Returns a new function that throttles the execution of the

### Example Use Cases

- **Debouncing event handlers**: Use the throttle function to limit the execution of an event handler to a specified delay time, preventing excessive function calls.

```javascript
const throttledHandler = throttle((event) => {
  console.log('Event handled!')
}, 500)

document.addEventListener('click', throttledHandler)
```

- **Rate limiting API requests**: Use the throttle function to limit the number of API requests made within a specified time period.

```javascript
const throttledRequest = throttle((url) => {
  fetch(url).then((response) => {
    console.log('Request made!')
  })
}, 1000)

throttledRequest('https://api.example.com/data')
```

### Notes

- The throttle function uses the `Date.now()` method to track the time elapsed since the last execution of the callback function.
- The throttle function clears any existing timeout using `clearTimeout()` before setting a new timeout.
- The throttle function updates the `lastExecutionTime` variable to the current time after each execution of the callback function.
