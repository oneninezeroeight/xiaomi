import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import {get,post} from '../axios/api.js';
const $http = {get,post};
const store = new Vuex.Store({
    state:{
        h_data:[]
    },
    getters:{
        getdata(state){
            return state.h_data
        }
    },
    mutations:{
        // update(state,data){
        //     state.h_data = data;
        // },
        setdata(state,data){
            state.h_data = data
        }
    },
    actions:{
        // setdate(context,data){
        //     context.commit('update',data);
        // },
        async setdata(context){
            let data = await $http.get("/get_home");
            context.commit("setdata", data);
            // window.console.log(data);
        }
    }
})
export default store;