import Vue from 'vue'
import App from './App.vue'
import Vant from "vant"
import "vant/lib/index.css"
import "./css/base.css";
import router from './router/index.js';
import "./libs/rem.js";
import store from './store';
import {get,post} from './axios/api.js';
Vue.prototype.$http = {get,post};
Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
