import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import filters from './filters'

const app = new Vue({
  router,
  ...AppLayout
})

Vue.filter('htmlToString', filters.htmlToString);

export { app, router }
