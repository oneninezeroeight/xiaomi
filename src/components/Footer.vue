<template>
  <div class="tabbar" v-show="cisok" >
    <van-tabbar v-model="active" fixed active-color="#ff6700" route>
      <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="orders-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {bus} from '../bus.js';
export default {
  data () {
    return {
      active: 0,
      cisok:true
    }
  },
  watch:{
    
  },
  created(){
    
  }
}
</script>
