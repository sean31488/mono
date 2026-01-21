import { App } from 'vue'

import components from './components'
import './global.d.ts'

export default {
  install (app: App) {
    Object.entries(components)
      .forEach(([name, component]) => {
        app.component(name, component)
      })
  }
}
