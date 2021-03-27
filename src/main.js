import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/index.css';
import vuetify from './plugins/vuetify';
import VueMask from 'v-mask'
import { StripePlugin } from '@vue-stripe/vue-stripe';
Vue.config.productionTip = false

const options = {
  pk: 'pk_test_51IZ0xrF5TwdgwJJV5xM27HQ3FAEdMR77xAcOVLdt0WnUEXuc1kUbCmzVNPaUbe1geaT5coLfWMfkZKEiD800pMY800i9rhQh1n',
  stripeAccount: 'acct_1IZ0xrF5TwdgwJJV',
  apiVersion: '2020-08-27',
  locale: 'locale',
};

Vue.use(StripePlugin, options);

new Vue({
  router,
  store,
  vuetify,
  VueMask,
  render: h => h(App)
}).$mount('#app')
