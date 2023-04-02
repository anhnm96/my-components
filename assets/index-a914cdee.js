import { aC as ref, aV as watch, aU as computed } from "./vendor-c9bd13d9.js";
function useInternalValue(props, key = "modelValue", emit, options = {}) {
  const { eventName } = options;
  const _modelValue = ref(props[key]);
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