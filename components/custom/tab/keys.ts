import type { InjectionKey } from 'vue'

interface Item {
  index: number
  size: number
  position: number
}

interface NavContext {
  setActiveItem: (index: number, size: number, position: number) => void
  activeItem: Item
  isReady: Readonly<Ref<boolean>>
  setMounted: () => void
  isMounted: Readonly<Ref<boolean>>
  isFluid: boolean
  isVertical: boolean
  duration: number
}

export const NavGroupKey: InjectionKey<NavContext> = Symbol('NavGroup')

export const NavListKey: InjectionKey<Ref<HTMLElement[]>> = Symbol('NavList')
