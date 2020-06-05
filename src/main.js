import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import store from "../store"


Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

console.log(process.env.VUE_APP_BASE_API)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
