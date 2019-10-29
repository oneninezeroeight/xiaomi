import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '../pages/Home/Home.vue';
import Classify from '../pages//Classify/Classify.vue';
import Cart from '../pages/Cart/Cart.vue';
import My from '../pages/My/My.vue';
import Login from "../pages/login/Login.vue";
const router = new VueRouter({
    mode: "hash",
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/classify",
            name: "classify",
            component: Classify
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/my",
            name: "my",
            component: My
        }, {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
})
export default router;