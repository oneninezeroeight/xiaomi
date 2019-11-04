<template>
  <div>
    <li v-for="(key,index) in goods" :key="index" class="item">
      <!---->
      <div class="ui-flex align-center justify-center">
        <!-- 复选框 -->
        <van-checkbox v-model="checked"></van-checkbox>
        <a href="#" class="imgProduct">
          <img
            src="//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555935546.09711490.jpg"
            lazy="loaded"
          />
        </a>
        <div class="info">
          <div class="item-text ui-flex align-start">
            <div class="name">小米壁画电视 65英寸</div>
          </div>
          <div class="price-without">
            <span>售价：</span>
            <span>6999元</span>
          </div>
          <div class="num">
            <div class="xm-input-number">
              <div @click="inputCut" class="input-sub active">
                <i class="image-icons icon-line">-</i>
              </div>
              <div class="input-num">
                <span v-text="amount"></span>
              </div>
              <div @click="inputAdd" class="input-add active">
                <i class="image-icons icon-cross">+</i>
              </div>
            </div>
            <div class="delete">
              <i class="image-icons icon-delete"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="batch flex"></div>
      <div class="ui-line"></div>
    </li>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
      money: "1",
      amount: 1,
      goods: [1, 2, 3]
    };
  },
  methods: {
    inputCut() {
      this.amount--;
      if (this.amount < 1) {
        this.amount = 1;
      }
    },
    inputAdd() {
      this.amount++;
      if (this.amount > 5) {
        this.amount = 5;
      }
    }
  }
};
</script>
<style scoped>
.cart-list .item .imgProduct img {
  width: auto;
  height: 100%;
}
.cart-list .item .imgProduct {
  display: block;
  position: relative;
  width: 4.770335rem;
  height: 4.770335rem;
  margin-right: 1rem;
  border: 1px solid #eee;
  border-radius: 2px;
}
.cart-list .item .info {
  width: 12.190856rem;
  text-align: left;
}
.cart-list .item .info .item-text {
  font-size: 0.742052rem;
  line-height: 0.84806rem;
  color: #666;
  margin-bottom: 0.318022rem;
  margin-right: 0.079506rem;
  padding: 0;
}
.cart-list .item .info .price-without {
  font-size: 0.636045rem;
  color: #999;
  margin-bottom: 0.318022rem;
}
/* // 价格 */
.cart-list .item .info .xm-input-number {
  display: inline-block;
  border: 1px solid #eee;
}
.cart-list .item .info .xm-input-number .input-add,
.cart-list .item .info .xm-input-number .input-sub {
  display: inline-block;
  width: 1.590112rem;
  height: 1.590112rem;
  position: relative;
  vertical-align: middle;
  background-color: #fafafa;
  text-align: center;
  line-height: 1.516436rem;
  font-size: 0.84806rem;
}
.cart-list .item .info .xm-input-number .input-num {
  display: inline-block;
  vertical-align: middle;
  min-width: 0.6rem;
  padding: 0 0.12rem;
  text-align: center;
  font-size: 0.32rem;
}
/* // 删除标签 */
.delete {
  display: inline-block;
  float: right;
}

.cart-list .item .info .delete .icon-delete {
  display: inline-block;
  width: 1.590112rem;
  height: 1.590112rem;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  margin-right: 0.530037rem;
}
.icon-delete {
  width: 1.690112rem;
  height: 1.690112rem;
  background: url("./img/del.png");
}
</style>