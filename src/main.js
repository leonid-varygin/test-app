import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueLocalStorage,
  render: h => h(App)
}).$mount('#app')
