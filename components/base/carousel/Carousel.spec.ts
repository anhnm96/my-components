import { mount } from '@vue/test-utils'
import Carousel from './Carousel.vue'
import CarouselItem from './CarouselItem.vue'

let wrapper: any

describe('Carousel.vue', () => {
  beforeEach(() => {
    wrapper = mount(Carousel, {
      slots: {
        default: [CarouselItem, CarouselItem],
      },
    })
  })

  it('render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('init correctly', () => {
    expect(wrapper.vm.items.length).toBe(2)
  })
})
