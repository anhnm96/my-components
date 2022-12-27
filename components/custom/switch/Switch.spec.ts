import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import Switch from './Switch.vue'

let wrapper: VueWrapper
describe('Switch.vue', () => {
  it('render correctly', () => {
    wrapper = shallowMount(Switch) as VueWrapper
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('has label', async () => {
    wrapper = shallowMount(Switch, {
      props: {
        label: { checked: 'on', unchecked: 'off' },
        'onUpdate:modelValue': (value: boolean) =>
          wrapper.setProps({ modelValue: value }),
      },
    }) as VueWrapper

    let label = wrapper.get('[data-test="label"]')
    expect(label.text()).toBe('off')
    await wrapper.trigger('click')
    label = wrapper.get('[data-test="label"]')
    expect(label.text()).toBe('on')
  })
})
