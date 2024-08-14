import { describe, expect, it, vi } from 'vitest'
import { throttle } from '../../../index.js'

describe('throttle Function', () => {
  it('should only execute the callback once within the delay period', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled()
    throttled()
    throttled()

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should execute the callback again after the delay', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled()
    setTimeout(throttled, 50) // Should not trigger callback

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(1)
    }, 75)

    setTimeout(() => {
      throttled()
      expect(callback).toHaveBeenCalledTimes(2)
    }, 150)
  })

  it('should handle continuous rapid calls and only execute the callback at intervals', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 200)

    for (let i = 0; i < 20; i++) {
      setTimeout(throttled, i * 50) // Call every 50ms for 1 second
    }

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(5) // Should have been called 5 times (every 200ms)
    }, 1200)
  })

  it('should pass arguments to the callback correctly', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled('arg1')
    throttled('arg2')

    expect(callback).toHaveBeenCalledWith('arg1')
    expect(callback).not.toHaveBeenCalledWith('arg2')

    setTimeout(() => {
      throttled('arg3')
      expect(callback).toHaveBeenCalledWith('arg3')
    }, 150)
  })

  it('should not execute callback before the delay period has passed', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 300)

    throttled()
    setTimeout(throttled, 150) // Should not trigger callback

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(1)
    }, 200)

    setTimeout(() => {
      throttled()
      expect(callback).toHaveBeenCalledTimes(2)
    }, 350)
  })

  it('should cancel pending timeout if a new call is made after the delay', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled() // Call 1
    setTimeout(() => throttled(), 80) // Call 2, within delay, schedules timeout
    setTimeout(() => throttled(), 120) // Call 3, after delay, cancels previous timeout and executes

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(2)
    }, 200)
  })

  it('should execute immediately after delay if a call was made during the delay', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled() // Call 1, should execute immediately
    setTimeout(throttled, 50) // Call 2, within delay, should not execute
    setTimeout(throttled, 100) // Call 3, after delay, should execute immediately

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(2) // Should have executed twice
    }, 200)
  })

  it('should execute only once on rapid successive calls faster than the delay', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 150)

    for (let i = 0; i < 10; i++) {
      throttled() // 10 rapid calls
    }

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
