import type { UseIntersectionObserverOptions } from '@vueuse/core'
import type { Ref } from 'vue'
const isClient = typeof window !== 'undefined'

/**
 * Load when a user scrolls to an element
 */
const loadOnIntersect = (
  containerRef: Ref<HTMLElement | undefined>,
  loadComponent: () => void,
  observerOptions?: UseIntersectionObserverOptions
) => {
  const targetIsVisible = ref(false)
  useIntersectionObserver(
    containerRef,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
    },
    observerOptions
  )

  // Trigger load on intersect
  watch(targetIsVisible, (isIntersecting) => {
    isIntersecting && loadComponent()
  })
}

const loadOnIdle = (loadComponent: () => void, idleTimeout: number) => {
  // Load component immediately if not in the browser environment
  // or if one of the necessary APIs is not supported
  if (
    !isClient ||
    !('requestIdleCallback' in window || !('requestAnimationFrame' in window))
  ) {
    loadComponent()
    return
  }

  // Load the component when the browser is free or schedule it
  // after the timeout is reached
  requestIdleCallback(
    () => {
      requestAnimationFrame(loadComponent)
    },
    { timeout: idleTimeout }
  )
}

export default defineComponent({
  props: {
    idleTimeout: {
      type: Number,
      default: 3000,
    },
    onIdle: {
      type: Boolean,
      default: false,
    },
    onVisible: {
      type: [Object, Boolean],
      default: null,
    },
  },
  emits: ['loaded'],
  setup(props, { slots, emit }) {
    const isComponentLoaded = ref(false)
    const containerRef = ref<HTMLElement>()

    const loadComponent = () => {
      isComponentLoaded.value = true
      emit('loaded')
    }

    // Call appropriate handler
    if (props.onIdle) loadOnIdle(loadComponent, props.idleTimeout)
    else
      loadOnIntersect(
        containerRef,
        loadComponent,
        typeof props.onVisible === 'object' ? props.onVisible : {}
      )

    /**
     * If component is to be loaded then pass through slots
     * Otherwise, render a div with a ref that is needed for
     * the Intersection Observer
     */
    return () =>
      isComponentLoaded.value ? slots.default?.() : <div ref={containerRef} />
  },
})
