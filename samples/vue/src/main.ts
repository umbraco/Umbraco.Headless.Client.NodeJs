import Vue from 'vue'
import Fragment from 'vue-fragment'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
