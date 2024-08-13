import { beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce } from '../../../index.js'

describe('debounce', () => {
  let callback

  beforeEach(() => {
    callback = vi.fn()
    vi.useFakeTimers() // Use fake timers in Vitest
  })

  it('should call the callback after the specified delay', () => {
    const debouncedFunction = debounce(callback, 1000)

    debouncedFunction()

    // Fast-forward time by 1000ms
    vi.advanceTimersByTime(1000)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should not call the callback if function is called again before delay', () => {
    const debouncedFunction = debounce(callback, 1000)

    debouncedFunction()
    vi.advanceTimersByTime(500) // 500ms

    debouncedFunction()
    vi.advanceTimersByTime(500) // Still within the delay

    expect(callback).not.toHaveBeenCalled()

    vi.advanceTimersByTime(500) // Now, total 1000ms since the last call

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should only call the callback once after multiple calls within delay', () => {
    const debouncedFunction = debounce(callback, 1000)

    debouncedFunction()
    vi.advanceTimersByTime(500)

    debouncedFunction()
    vi.advanceTimersByTime(500)

    debouncedFunction()
    vi.advanceTimersByTime(1000) // 1000ms after the last call

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('should pass the correct arguments to the callback', () => {
    const debouncedFunction = debounce(callback, 1000)

    debouncedFunction('arg1', 'arg2')
    vi.advanceTimersByTime(1000)

    expect(callback).toHaveBeenCalledWith('arg1', 'arg2')
  })

  it('should handle multiple debounced functions independently', () => {
    const callback1 = vi.fn()
    const callback2 = vi.fn()

    const debouncedFunction1 = debounce(callback1, 1000)
    const debouncedFunction2 = debounce(callback2, 500)

    debouncedFunction1()
    debouncedFunction2()

    vi.advanceTimersByTime(500)

    expect(callback1).not.toHaveBeenCalled()
    expect(callback2).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(500)

    expect(callback1).toHaveBeenCalledTimes(1)
  })

  it('should clear timeout after the callback is called', () => {
    const debouncedFunction = debounce(callback, 1000)

    debouncedFunction()

    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(1)

    debouncedFunction()
    vi.advanceTimersByTime(1000)
    expect(callback).toHaveBeenCalledTimes(2)
  })
})
