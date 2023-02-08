const config = {
  timeoutInMs: 6000,
  contentScrollThresholdInPercentage: 35,
} as const

export default function usePolitePopup() {
  const visible = ref(false)
  const readTimeElapsed = ref(false)

  const { start } = useTimeoutFn(
    () => {
      readTimeElapsed.value = true
    },
    config.timeoutInMs,
    { immediate: false }
  )

  const { height: windowHeight } = useWindowSize()
  const { y: scrollTop } = useScroll(window)

  const amountScrolledInPercentage = computed(() => {
    const documentScrollHeight = document.documentElement.scrollHeight
    const trackLength = documentScrollHeight - windowHeight.value
    const scrollPercent = scrollTop.value / trackLength
    const scrollPercentRounded = Math.floor(scrollPercent * 100)
    return scrollPercentRounded
  })

  const scrolledContent = computed(() => {
    return (
      amountScrolledInPercentage.value >=
      config.contentScrollThresholdInPercentage
    )
  })

  const unwatch = watch(
    [readTimeElapsed, scrolledContent],
    ([newReadTimeElapsed, newScrolledContent]) => {
      if (newReadTimeElapsed && newScrolledContent) {
        visible.value = true
        unwatch()
      }
    }
  )

  const setClosed = () => {
    visible.value = false
  }

  return { visible, start, setClosed }
}
