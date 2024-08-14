export function throttle(callback, delay) {
  let lastExecutionTime = 0
  let timeoutId

  return (...args) => {
    const now = Date.now()
    const remainingTime = delay - (now - lastExecutionTime)

    if (remainingTime <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }

      callback(...args)
      lastExecutionTime = now
    }

    else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callback(...args)
        lastExecutionTime = Date.now()
        timeoutId = null
      }, remainingTime)
    }
  }
}
