import { changeTracker } from './useTracker'

describe('changeTracker', () => {
  it('should detect changed properties', () => {
    const obj: Record<string, any> = { a: 'a' }
    changeTracker.track(obj)
    obj.a = 'a'
    obj.b = 'c'
    obj.c = 'd'
    expect(changeTracker.changedProps(obj)).toMatchObject(['b', 'c'])
  })

  it('should produce changed partial object', () => {
    const obj: Record<string, any> = { a: 'a' }
    changeTracker.track(obj)
    obj.a = 'a'
    obj.b = 'c'
    obj.c = 'd'
    expect(changeTracker.changed(obj)).toMatchObject({ b: 'c', c: 'd' })
  })

  it('should throw error on untracked object', () => {
    const obj = {}
    expect(() => changeTracker.changed(obj)).toThrowError()
  })
})
