import { describe, expect, it } from 'vitest'
import { sleep } from '../../index.js'

describe('sleep function', () => {
  it('waits for the specified number of milliseconds', async () => {
    const start = Date.now()
    await sleep(1000)
    const end = Date.now()

    expect(end - start).toBeGreaterThanOrEqual(1000)
  })
})
