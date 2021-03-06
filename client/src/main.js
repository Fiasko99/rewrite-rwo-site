import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import Vuelidate from "vuelidate";
import axios from "axios";
// import VueSocketIO from 'vue-socket.io'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(Vuelidate);
// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: 'http://localhost:3001',
//   vuex: {
//       store,
//       actionPrefix: 'SOCKET_',
//       mutationPrefix: 'SOCKET_'
//   },
// }))

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
