import type {
  MaybeElementRef,
  UseIntersectionObserverOptions,
} from '@vueuse/core'

export const useIntersectionObs = (
  target: MaybeElementRef,
  onIntersect: () => void,
  options: UseIntersectionObserverOptions = {}
) => {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (options.root) {
      options.root = unref(options.root)
    }
    const el = unref(target)
    if (!(el instanceof HTMLElement))
      throw new Error(
        'useIntersectionObserver: target is not an HTMLElement or ref<HTMLElement>'
      )

    // Render the VeryLargeComponent when the container intersects
    const intersectionCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && onIntersect) {
          onIntersect()
        }
      })
    }
    observer = new IntersectionObserver(
      intersectionCallback,
      options as IntersectionObserverInit
    )

    observer.observe(el)
  })

  onScopeDispose(() => {
    observer?.disconnect()
  })

  return {
    observer: observer as IntersectionObserver,
  }
}
