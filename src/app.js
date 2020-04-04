import Vue from 'vue'

const app = new Vue({
  data() {
    return {
      msg: 'Configuración Inicial del proyecto'
    }
  },
  template: '<div>{{ msg }}</div>'
})

export { app }
