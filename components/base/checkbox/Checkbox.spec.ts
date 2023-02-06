import { shallowMount } from '@vue/test-utils'
import CheckBox from './Checkbox.vue'

let wrapper: any

describe('CheckBox', () => {
  beforeEach(() => {
    wrapper = shallowMount(CheckBox)
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('emit input event with value when value change', async () => {
    wrapper.setProps({ modelValue: true })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.computedValue).toBeTruthy()

    wrapper.vm.computedValue = false
    await wrapper.vm.$nextTick()
    const valueEmitted = wrapper.emitted('update:modelValue')
    expect(valueEmitted[0]).toEqual([false])
  })
})
