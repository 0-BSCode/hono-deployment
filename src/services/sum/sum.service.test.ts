import {describe, expect, it} from 'vitest'
import {addNumbers} from './sum.service'

describe('Sum service', () => {
  it('should sum two numbers', () => {
    expect(addNumbers(1, 2)).toBe(3)
  })
})