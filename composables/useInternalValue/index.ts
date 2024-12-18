interface UseInternaValueOptions {
  eventName?: string
  defaultValue?: any
}

export function useInternalValue<
  P extends Record<string, any>,
  K extends keyof P,
  Name extends string,
>(
  props: P,
  emit?: (e: Name, payload: any) => void,
  key: K = 'modelValue' as K,
  options: UseInternaValueOptions = {},
) {
  const { eventName, defaultValue } = options
  const _modelValue = ref(props[key] || defaultValue)

  watch(
    () => props[key],
    (val) => {
      _modelValue.value = val
    },
  )

  const event = (eventName || `update:${key.toString()}`) as Name
  return computed<P[K]>({
    set(value) {
      _modelValue.value = value
      emit?.(event, value)
    },
    get() {
      return _modelValue.value
    },
  })
}
