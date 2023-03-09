interface UseInternaValueOptions {
  eventName?: string
}

export function useInternalValue<
  P extends Record<string, any>,
  K extends keyof P,
  Name extends string
>(
  props: P,
  key: K = 'modelValue' as K,
  emit?: (e: Name, payload: any) => void,
  options: UseInternaValueOptions = {}
) {
  const { eventName } = options
  const _modelValue = ref(props[key])

  watch(
    () => props[key],
    (val) => {
      _modelValue.value = val
    }
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
