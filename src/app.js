import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'
import store from './vuex/index'
import filters from './filters'

const app = new Vue({
  router,
  ...AppLayout,
  store
})

Vue.filter('htmlToString', filters.htmlToString);

export { app, router, store }
