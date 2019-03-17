import Vue from 'vue'
import App from './App.vue'
import Home from '@/components/Home.vue'

import router from '@/router.js'
import Vuetify from 'vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'

require('@/assets/global.css')
Vue.config.productionTip = false
Vue.use(router)
Vue.use(Vuetify)

new Vue({
  router,
  render: h => h(Home)
}).$mount('#app')
