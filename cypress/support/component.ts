import './commands'
import '../../assets/css/tailwind.css'

import { mount as _mount } from 'cypress/vue'

Cypress.Commands.add('mount', mount)
type MountingOptions = Parameters<typeof _mount>[1]

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

function mount<T>(comp: any, payload: MountingOptions = {}) {
  const _props: T = {
    ...payload.props,
  } as any

  return _mount(comp as any, {
    ...payload,
    props: _props,
    global: {
      plugins: [],
    },
  })
}
