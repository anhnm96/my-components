// @ts-nocheck
import type { Component } from 'vue'
import { createApp, createVNode, ref } from 'vue'
import Notification from './Notification.vue'
import NotificationContainer from './NotificationContainer.vue'
import type { ToastOptions } from './types'
export const notifications = ref({
  'top-left': [],
  'top-right': [],
  'bottom-left': [],
  'bottom-right': [],
  'top-center': [],
  'bottom-center': [],
})

const defaultOptions = {
  type: 'info',
  position: 'top-right',
  timeout: 5000,
  showProgressBar: true,
}

let newId = 0
let parentEl: HTMLElement

function mergeOptions(options = {}) {
  let mergedOptions = { ...defaultOptions, ...options, id: newId, key: newId }

  mergedOptions.onClose = (payload: any) => {
    const removeIndex = notifications.value[mergedOptions.position].findIndex(
      (n) => n.props.id === mergedOptions.id
    )

    notifications.value[mergedOptions.position][removeIndex].result(payload)
    notifications.value[mergedOptions.position].splice(removeIndex, 1)
    // release from memory
    mergedOptions = null
  }

  return mergedOptions
}

export function show(
  options?: ToastOptions,
  component: Component = Notification
) {
  const mergedOptions = mergeOptions(options)
  const toastVNode = createVNode(component, mergedOptions)
  notifications.value[mergedOptions.position].push(toastVNode)

  if (!parentEl) {
    parentEl = document.createElement('div')
    document.body.appendChild(parentEl)
    createApp(NotificationContainer).mount(parentEl)
  }
  newId++

  return new Promise((resolve) => {
    toastVNode.result = resolve // we'll call resolve in onClose function
  })
}
