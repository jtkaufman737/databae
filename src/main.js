import Vue from 'vue'
import App from './App.vue'
const wing = require('wingcss');

Vue.config.productionTip = false
Vue.use(wing);
new Vue({
  render: h => h(App),
}).$mount('#app')
