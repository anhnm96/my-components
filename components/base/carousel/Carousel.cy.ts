import CarouselItemDemo from './Carousel.story.vue'

describe('Carousel', () => {
  it('render', () => {
    cy.mount(CarouselItemDemo)
    // mount(Carousel, {
    //   slots: {
    //     default: [CarouselItem, CarouselItem],
    //   },
    // })
  })
})
