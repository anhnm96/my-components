import { useInternalValue } from '.'

describe('useInternalValue', () => {
  const defaultProps = () => ({ modelValue: 'default' })
  let emitMock: any
  beforeEach(() => {
    emitMock = vitest.fn()
  })

  it('should work with custom key', () => {
    const data = useInternalValue({ data: 'data' }, emitMock, 'data')
    expect(data.value).toBe('data')
  })

  it('should emit on value change', () => {
    const data = useInternalValue(defaultProps(), emitMock)
    data.value = 'changed'

    expect(emitMock).toHaveBeenCalledWith('update:modelValue', 'changed')
  })

  it('should use eventName if set', async () => {
    const data = useInternalValue(defaultProps(), emitMock, undefined, {
      eventName: 'onChange',
    })
    data.value = 'changed'

    expect(emitMock).toHaveBeenCalledWith('onChange', 'changed')
  })
})
