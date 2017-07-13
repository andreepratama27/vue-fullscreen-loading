import Vue from 'vue'
import App from './App.js'

const app = new Vue({
  render: (h) => h(App)
})

app.$mount('#app-container')
