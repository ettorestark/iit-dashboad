import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  store  from './store/store.js'
import './registerServiceWorker'

import Toasted from 'vue-toasted';
Vue.use(Toasted)

//LAYOUTS
import Blank from './layouts/Blank.vue'
Vue.component('blank-layout', Blank);

import Dashboard from './layouts/Dashboard.vue'
Vue.component('dashboard-layout', Dashboard);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
