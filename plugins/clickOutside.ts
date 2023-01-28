export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('clickOutside', {
    mounted(el, binding) {
      let targetEl = el
      if (binding.arg === 'parent') targetEl = el.parentElement
      targetEl.__ClickOutsideHandler__ = (event: Event) => {
        // check if event's target is the el or contained by el
        if (!(targetEl === event.target || targetEl.contains(event.target))) {
          binding.value(event)
        }
      }
      document.body.addEventListener('click', targetEl.__ClickOutsideHandler__)
    },
    beforeUnmount(el, binding) {
      let targetEl = el
      if (binding.arg === 'parent') targetEl = el.parentElement
      document.body.removeEventListener(
        'click',
        targetEl.__ClickOutsideHandler__
      )
    },
  })
})
