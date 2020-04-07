import { app } from './app'
import router from './router'

// Section VSSR
router.onReady(() => {
  app.$mount('#app')
})

// app.$mount('#app')
