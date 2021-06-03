import { ViteSSG } from 'vite-ssg'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import '../src/styles/index.css'

// `export const createApp` is required
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes, scrollBehavior: (to, from, savedPosition) => savedPosition || ({ top: 0 }) },
  // function to have custom setups
  ({ app, router, isClient }) => {
    // install plugins etc.
  },
)
