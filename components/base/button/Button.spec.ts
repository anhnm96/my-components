import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import Button from './Button.vue'

let wrapper: VueWrapper
describe('Button.vue', () => {
  it('render correctly', () => {
    wrapper = shallowMount(Button) as VueWrapper
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('while loading', () => {
    beforeEach(async () => {
      wrapper = shallowMount(Button) as VueWrapper
      await wrapper.setProps({ loading: true })
    })

    it('show loading message', async () => {
      expect(wrapper.get('[aria-live="assertive"]').text()).toBe(
        wrapper.props('loadingMsg')
      )
    })

    it('should not be able to cick', async () => {
      await wrapper.trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('click')
    })
  })

  it('emit click correctly', async () => {
    wrapper = shallowMount(Button) as VueWrapper
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toHaveLength(1)
  })

  it('should not be able to cick when aria-disabled is true', async () => {
    wrapper = shallowMount(Button, {
      attrs: {
        'aria-disabled': true,
      },
    }) as VueWrapper
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
