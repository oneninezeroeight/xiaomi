<template>
  <div class="main">
    <div class="app-view-wrapper">
      <!---->
      <div class="container fluid app-view app-view-with-header">
        <!---->
        <div class="page-wrap">
          <!-- 提示登录信息 -->
          <div class="nologin">
            <a class="box-flex align-center justify-space-between">
              <span class="flex">登录后享受更多优惠</span>
              <em class="flex">去登录</em>
            </a>
          </div>
          <!---->
          <div class="cart-list">
            <ol>
              <li v-for="(key,index) in goods " :key="index" class="item">
                <!---->
                <div class="ui-flex align-center justify-center">
                  <!-- 复选框 -->
                  <!-- <van-checkbox-group v-model="checked"> -->
                  <van-checkbox v-model="key.checked"></van-checkbox>
                  <!-- </van-checkbox-group> -->
                  <a href="#" class="imgProduct">
                    <img :src="key.src" lazy="loaded" />
                  </a>
                  <div class="info">
                    <div class="item-text ui-flex align-start">
                      <div class="name">{{key.name}}</div>
                    </div>
                    <div class="price-without">
                      <span>售价：</span>
                      <span>{{key.money}}</span>
                    </div>
                    <div class="num">
                      <div class="xm-input-number">
                        <!-- 步进器 -->
                        <van-stepper
                          max="5"
                          v-model="key.amount"
                          @plus="inputAdd(index)"
                          @minus="inputCut(index)"
                        />
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
            </ol>
            <div class="point-box">
              <div class="point" style="display: none;">
                <span class="act act_special">包邮</span>
                <span></span>
              </div>
              <!-- {{checked}} -->
              <div class="point">
                <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
              </div>
            </div>
            <div class="ui-line"></div>
          </div>
          <div class="recommend-box space-top">
            <div class="recommend-top-img">
              <img
                src="//i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
                lazy="loaded"
              />
            </div>
            <div
              class="recommend-list layout row wrap align-center align-content-start justify-space-between J_linksign-customize"
            >
              <div class="goods-item">
                <a class="exposure">
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/477b561ea6b00e77e041ea73c881974e.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">小米CC9 6GB+128GB</div>
                    <div class="goods-price price">
                      1699
                      <del class="price">1999</del>
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a class="exposure">
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d529d6344ea5b228c28f759742a7d2b.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">Redmi K20 Pro 尊享版 8GB+128GB</div>
                    <div class="goods-price price">
                      2699
                      <!---->
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a class="exposure">
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4554aeb18a57bca9534cb8cfa3f659ba.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">Redmi 8A 3GB+32GB</div>
                    <div class="goods-price price">
                      699
                      <!---->
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a class="exposure">
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1571a08fd23ea5b409245916fbfb78c8.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">Redmi Note 8 Pro 8GB+128GB</div>
                    <div class="goods-price price">
                      1799
                      <!---->
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a class="exposure">
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab4f62b956783a1e2184b42a90a9e1f2.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">黑鲨游戏手机2 Pro 12GB+512GB</div>
                    <div class="goods-price price">
                      3999
                      <!---->
                    </div>
                  </div>
                </a>
              </div>
              <div class="goods-item">
                <a>
                  <div class="goods-img-box">
                    <img
                      class="lazy"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b21b11d359693c3ef7bd041737f90518.jpg?thumb=1&amp;w=360&amp;h=360"
                      lazy="loaded"
                    />
                  </div>
                  <div class="goods-info">
                    <div class="goods-name no-wrap">Redmi Note 8 6GB+64GB</div>
                    <div class="goods-price price">
                      1199
                      <!---->
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!---->
          </div>
        </div>

        <!-- 总金额计算 -->
        <div class="bottom-submit">
          <div class="box-flex">
            <div class="price-box flex">
              <span>共4件 金额：</span>
              <br />
              <strong>{{money}}</strong>
              <span>元</span>
            </div>
            <a href="/category" class="btn disable black flex">继续购物</a>
            <a data-log_code="m#bid=3507187.2" class="btn flex">去结算</a>
          </div>
          <div class="safe-area-inset"></div>
        </div>
        <div class="insurance-pop">
          <!---->
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // checked: "",
      money: 0,
      M: 0,
      // amount: 1,
      goods: ""
    };
  },
  created() {
    this.axios.get("http://localhost:3000/car").then(response => {
      window.console.log(response);
      this.goods = response.data;
      window.console.log(this.goods);
    });
  },

  methods: {
    sum() {
      this.money = 0;
      this.goods.forEach(ele => {
        if (ele.checked) {
          let moneys = ele.money * ele.amount;
          this.money = moneys + this.money;
          window.console.log("11111", ele.amount);
        }
      }, this);
    },
    inputCut(index) {
      this.goods[index].amount -= 1;
      this.sum();
    },
    inputAdd(index) {
      this.goods[index].amount += 1;
      this.sum();
    }
  },
  mounted() {
    this.sum();
  }
};
</script>
<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
.main {
  width: 100%;
  overflow: hidden;
}

// 登录提示信息
.nologin > a {
  text-align: center;
  height: 2.756193rem;
  padding: 0 1.484104rem 0 0.84806rem;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  span {
    font-size: 0.84806rem;
    color: rgba(0, 0, 0, 0.87);
    display: block;
    text-align: left;
  }
  em {
    font-style: normal;
    font-size: 0.636045rem;
    text-align: right;
  }
}
// 商品详细
.cart-list {
  background: #fff;
}
.cart-list .item .ui-flex {
  //   width: 100%;
  padding: 0.636045rem 0;
}
.justify-center {
  justify-content: left;
}
// 复选框样式
.van-checkbox {
  padding: 0 0.530037rem;
}
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
// 描述
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
// 价格
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
// 删除标签
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
// 商品结算提示
.cart-list .point-box .point {
  font-size: 0.22rem;
  color: #999;
  border-top: 1px solid #f6f6f6;
  padding: 0.2rem 0.3rem;
  text-align: left;
}
// 推荐页面
.recommend-box {
  background: #fff;
  text-align: left;
}
.recommend-box .recommend-top-img {
  width: 100%;
}
.recommend-box .recommend-top-img img {
  width: 100%;
  height: 3.180223rem;
}
.layout.wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.recommend-box .recommend-list .goods-item {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 49.5%;
  flex: 0 1 49.5%;
  overflow: hidden;
}
.recommend-box .recommend-list .goods-item a {
  display: block;
}
.recommend-box .recommend-list .goods-img-box {
  position: relative;
}
.recommend-box .recommend-list .goods-info {
  padding: 0.18rem 0.26rem 0.22rem;
}
.recommend-box .recommend-list .goods-img-box img {
  display: block;
  width: 100%;
  min-height: 3.56rem;
}
.recommend-box .recommend-list .goods-name {
  font-size: 0.28rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-box .recommend-list .goods-price {
  font-size: 0.32rem;
  display: inline-block;
  color: #ff6700;
  margin-top: 0.1rem;
}
.recommend-box .recommend-list .goods-price del {
  font-size: 0.22rem;
  margin-left: 0.1rem;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}

// 底部
.bottom-submit {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.box-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.bottom-submit .price-box {
  font-size: 0.689048rem;
  color: #999;
  width: 100%;
  text-align: center;
  padding-top: 0.397528rem;
}
.bottom-submit .disable {
  background: #f4f4f4;
  border: 1px solid #f4f4f4;
}
.bottom-submit .btn {
  display: block;
  width: 100%;
}
.btn {
  display: block;
  outline: 0;
  background: #ff6700;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 2.650186rem;
  line-height: 2.650186rem;
  sfont-size: 0.742052rem;
}
</style>