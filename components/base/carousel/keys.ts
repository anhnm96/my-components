import type { InjectionKey, Ref } from 'vue'

interface CarouselContext {
  items: Ref<HTMLDivElement[]>
  addItem: (item: HTMLDivElement) => void
  updateActiveIndex: (index: number) => void
}

export const CarouselKey: InjectionKey<CarouselContext> = Symbol('Carousel')
