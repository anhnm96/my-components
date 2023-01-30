import type { VNode } from '@vue/runtime-core'
import type { Component } from 'vue'

export type ToastType = 'info' | 'danger' | 'warn' | 'success' | 'default'

export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'

export type TransitionType = 'bounce' | 'zoom' | 'slide'

export interface ContentObject {
  title: string
  description?: string
}

export interface DisplayContentObject {
  text: string
  description?: string
}

export type ToastContent = string | ContentObject | Component

export interface ToastObject {
  toastVNode: VNode
  container: HTMLDivElement
}

export interface ToastOptions {
  type?: ToastType
  timeout?: number
  position?: Position
  showProgressbar?: boolean
  swipeClose?: boolean
  onClose?: () => void
  title?: string
  description?: string
}
