import { useInternalValue } from '.'

describe('useInternalValue', () => {
  const defaultProps = () => ({ modelValue: 'default' })
  let emitMock: any
  beforeEach(() => {
    emitMock = vitest.fn()
  })

  it('should work with custom key', () => {
    const data = useInternalValue({ data: 'data' }, 'data', emitMock)
    expect(data.value).toBe('data')
  })

  it('should emit on value change', () => {
    const data = useInternalValue(defaultProps(), undefined, emitMock)
    data.value = 'changed'

    expect(emitMock).toHaveBeenCalledWith('update:modelValue', 'changed')
  })

  it('should use eventName if set', async () => {
    const data = useInternalValue(defaultProps(), undefined, emitMock, {
      eventName: 'onChange',
    })
    data.value = 'changed'

    expect(emitMock).toHaveBeenCalledWith('onChange', 'changed')
  })
})
