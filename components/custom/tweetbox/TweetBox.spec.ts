import { shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import TweetBox from './TweetBox.vue'

let wrapper: VueWrapper
describe('TweetBox.vue', () => {
  it('render correctly', () => {
    wrapper = shallowMount(TweetBox, {
      props: { modelValue: '' },
    }) as VueWrapper
    expect(wrapper.html()).toMatchSnapshot()
  })
})
