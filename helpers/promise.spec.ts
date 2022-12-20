import { asyncWrap } from './promise'
import type { AsyncTuple } from './promise'

describe('asyncWrap', () => {
  describe('given a callback function that returns a value', () => {
    let result: AsyncTuple

    beforeAll(async () => {
      result = await asyncWrap(() => Promise.resolve('value'))
    })

    it('should return explicit undefined as the error', () => {
      expect(result[1]).toBe(undefined)
    })

    it('should return data', () => {
      expect(result[0]).toEqual('value')
    })
  })

  describe('given a callback function that throws an exception', () => {
    const customError = new Error('Error message')

    const run = () => {
      return asyncWrap(() => {
        throw customError
      })
    }

    it('should not throw when called', () => {
      expect(run).not.toThrow()
    })

    it('should return caught error as error', async () => {
      const [, error] = await run()
      expect(error).toEqual(customError)
    })

    it('should return explicit undefined as data', async () => {
      const [data] = await run()
      expect(data).toBe(undefined)
    })
  })

  describe('given a Promise that rejects', () => {
    let result: AsyncTuple

    beforeAll(async () => {
      result = await asyncWrap(() => Promise.reject(new Error('Error message')))
    })

    it('should return the rejected error', () => {
      expect(result[1]).toBeInstanceOf(Error)
      expect(result[1]).toHaveProperty('message', 'Error message')
    })

    it('should return explicit undefined as data', () => {
      expect(result[0]).toBeUndefined()
    })
  })
})
