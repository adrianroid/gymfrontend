import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css';
import vuetify from './plugins/vuetify';
import VueMask from 'v-mask'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueMask,
  render: h => h(App)
}).$mount('#app')
