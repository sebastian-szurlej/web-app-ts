/**
 * plugins/index.js
 *
 * Automatically included in `./src-ui/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../stores'
import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  loadFonts()
  app.use(vuetify).use(pinia).use(router)
}
