import { at as ref, aT as watch, av as computed } from "./vendor-CMJc4gfg.js";
function useInternalValue(props, emit, key = "modelValue", options = {}) {
  const { eventName, defaultValue } = options;
  const _modelValue = ref(props[key] || defaultValue);
  watch(
    () => props[key],
    (val) => {
      _modelValue.value = val;
    }
  );
  const event = eventName || `update:${key.toString()}`;
  return computed({
    set(value) {
      _modelValue.value = value;
      emit == null ? void 0 : emit(event, value);
    },
    get() {
      return _modelValue.value;
    }
  });
}
export {
  useInternalValue as u
};
