import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home/Home.vue';
import Classify from '../pages//Classify/Classify.vue';
import Cart from '../pages/Cart/Cart.vue';
import My from '../pages/My/My.vue';
import Login from "../pages/login/Login.vue";
import Register from "../pages/login/Register.vue";
import Details from "../pages/Details/Details.vue";
const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                miss: true
            }
        },
        {
            path: "/classify",
            name: "classify",
            component: Classify,
            meta: {
                miss: true
            }
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart,
            meta: {
                miss: true
            }
        },
        {
            path: "/my",
            name: "my",
            component: My,
            meta: {
                miss: true
            }
        }, {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                miss: false
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                miss: false
            }
        }, {
            path: "/details",
            name: "details",
            component: Details,
            meta: {
                miss: false
            }
        }
    ]
})
export default router;