import { describe, expect, it } from 'vitest'
import { TransactionsController } from '../../index.js'

// -- Tests --------------------------------------------------------------------
describe('TransactionsController', () => {
  it('should have valid default state', () => {
    expect(TransactionsController.state).toEqual({
      transactions: [],
      loading: false,
      empty: false,
      next: null
    })
  })
})
