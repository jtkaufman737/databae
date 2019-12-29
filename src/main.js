import Vue from 'vue'
import App from './App.vue'
const wing = require('wingcss');
import VueRouter from 'vue-router';
import router from '@/router'

Vue.config.productionTip = false
Vue.use(wing);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
