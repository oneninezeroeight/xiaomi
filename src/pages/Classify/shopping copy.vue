<template>
  <div>
    <div class="main-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(key,index) in shop" :title="key.category_name" :key="index" />
      </van-sidebar>
    </div>

    <div class="list-wrap">
      <div class="list-item category0">
        <div class="component-list-main">
          <div class="cells_auto_fill" index="0">
            <a class="exposure items" style="height:5.541746rem;width:13.854364rem">
              <img
                style="height:5.541746rem;width:13.854364rem ;"
                src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/69b470df9b6a61ca62379214c2bba303.jpg?thumb=1&amp;w=500&amp;h=200"
                lazy="loaded"
              />
            </a>
          </div>
          <div name="m1" class="category_title">
            <span>手机</span>
          </div>
          <!---->
          <div class="category_group box-flex" index="2">
            <div class="box">
              <div class="product">
                <a class="exposure item">
                  <div data-v-6b9822de class="img">
                    <img
                      class="big"
                      style="width: 2.760434rem; height: 2.760434rem"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a78e73027b202757a933083ddd6ffbe0.png?thumb=1&amp;w=120&amp;h=120"
                      lazy="loaded"
                    />
                    <!---->
                  </div>
                  <div class="name">Redmi 8</div>
                </a>
              </div>
            </div>
          </div>
          <!---->
          <div name="m3" class="category_title">
            <span>家电</span>
          </div>
          <!---->
          <div class="category_group box-flex" index="4">
            <div class="box">
              <div class="product">
                <a class="exposure item">
                  <div class="img">
                    <img
                      class="big"
                      style="width: 2.760434rem; height: 2.760434rem"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8918bab2e5fbdb1ebe79595ce6716a63.jpg?thumb=1&amp;w=120&amp;h=120"
                      lazy="loaded"
                    />
                    <!---->
                  </div>
                  <div class="name">全面屏电视E55A</div>
                </a>
              </div>
            </div>
          </div>
          <!---->
          <div name="m5" class="category_title">
            <span>电脑</span>
          </div>
          <!---->
          <div class="category_group box-flex" index="6">
            <div class="box">
              <div class="product">
                <a class="exposure item">
                  <div class="img">
                    <img
                      class="big"
                      style="width: 1.2rem; height: 1.2rem;"
                      src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb90e130ecf2248e6dcbd239b72696e9.jpg?thumb=1&amp;w=120&amp;h=120"
                      lazy="loaded"
                    />
                  </div>
                  <div class="name">游戏本512GB</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shop: "",
      activeKey: ""
    };
  },
  created() {
    // window.console.log(this);
    this.axios.get("http://localhost:3000/classify").then(response => {
      const data = response.data;
      window.console.log("全部数据", data);

      window.console.log(data[0].category_name);

      this.shop = data;
      window.console.log(this);
    });
  }
};
</script>
<style scoped>
@import "./classify01.css";
@import "./classify02.css";
@import "./classify03.css";
@import "./classify04.css";

.classify {
  position: relative;
  width: 100%;
  z-index: 1;
}
.van-sidebar {
  padding-top: 2.930731rem;
  padding-bottom: 2.930731rem;
  float: left;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 4.662526rem;
  overflow-y: auto;
}
.van-row {
  padding-top: 15%;
}
.main {
  position: relative;
  /* max-width: 7.2rem; */
  margin: 0 auto;
}

.list-wrap {
  padding-top: 2.930731rem;
  padding-bottom: 2.930731rem;
  padding-left: 7.84em;
  padding-right: 0.32rem;
}
.category_title {
  width: 14.045986rem;
  height: 3.533228rem;
  text-align: center;
}
.category_title span {
  line-height: 3.533228rem;
}
.product {
  width: 4.637826rem;
  height: 4.219096rem;
  float: left;
}
.component-list-main .category_group .product .img {
  width: 2.760434rem;
  height: 2.760434rem;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
.component-list-main .category_group .name {
  margin-top: 0.28rem;
  white-space: nowrap;
  font-size: 0.23rem;
  color: rgba(0, 0, 0, 0.54);
}
.category_title {
  width: 14.045986rem;
  height: 3.533228rem;
  text-align: center;
}
</style>