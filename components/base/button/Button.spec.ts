import type { VueWrapper } from '@vue/test-utils'
import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button.vue', () => {
  it('render correctly', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('while loading', () => {
    let wrapper: VueWrapper<typeof Button>
    beforeEach(() => {
      wrapper = shallowMount(Button, {
        props: { loading: true, loadingMsg: 'processing' },
      }) as any
    })
    it('show loading message', async () => {
      expect(wrapper.get('[aria-live="assertive"]').text()).toBe('processing')
    })

    it('should not be able to click', async () => {
      await wrapper.trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('click')
    })
  })

  it('emit click correctly', async () => {
    const wrapper = shallowMount(Button)
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toHaveLength(1)
  })

  it('should not be able to cick when aria-disabled is true', async () => {
    const wrapper = shallowMount(Button, {
      attrs: {
        'aria-disabled': true,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
