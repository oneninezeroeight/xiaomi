import Vue from 'vue'
import App from './App.vue'
import Vant from "vant"
import "vant/lib/index.css"
import axios from "axios"
import router from './router/index.js';
import Lazyload from 'vue-lazyload';
import Cookies from 'js-cookie'
import "./libs/rem.js";
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.Cookies = Cookies;
Vue.use(Vant);
Vue.use(Lazyload);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // window.console.log(Cookies.get("userpass"))
  let userpass = Cookies.get("userpass");
  // window.console.log(userpass)
  if (userpass) {
    next()
  } else {
    if (to.path == '/login' || to.path == '/register') {
      next();
    } else {
      alert('您还没有登录，请先登录');
      next('/login');
    }

  }
})