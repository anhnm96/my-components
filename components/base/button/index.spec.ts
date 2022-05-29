import { shallowMount } from '@vue/test-utils'
import Button from './index.vue'

let wrapper: any
describe('Button.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(Button)
  })

  it('is called', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
