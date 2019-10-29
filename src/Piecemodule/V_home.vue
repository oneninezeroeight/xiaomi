<template>
  <div class="main" v-if="body_data">
    <van-swipe indicator-color="white" :loop="false">
      <van-swipe-item v-for="(item,index) in body_data[0].body.items" :key="index">
        <img
          width="100%"
          data-v-79a5cf42
          class="swiper-lazy swiper-lazy-loaded"
          :src="item.img_url"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="exposure">
      <div class="cells_auto_fill">
        <a href="###" v-for="(item,index) in body_data[9].body.items" :key="index">
          <img width="100%" :src="item.img_url" alt />
        </a>
      </div>
      <div class="cells_auto_fill">
        <a href="###" v-for="(item,index) in body_data[4].body.items" :key="index">
          <img width="100%" :src="item.img_url" alt />
        </a>
      </div>
    </div>
    <div class="multi_cell222">
      <a href="###">
        <img :src="body_data[6].body.items[0].img_url" alt />
      </a>
      <a href="###">
        <img :src="body_data[6].body.items[1].img_url" alt />
      </a>
      <a href="###">
        <img :src="body_data[6].body.items[2].img_url" alt />
      </a>
    </div>
    <div class="multi_cell222">
      <a href="###" style="width:100%">
        <img :src="body_data[7].body.items[0].img_url" alt />
      </a>
    </div>
    <div class="multi_cell222">
      <a href="###" style="width:100%">
        <img :src="body_data[8].body.items[0].img_url" alt />
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[3].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[3].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[3].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[3].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[3].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[3].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[3].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[3].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[13].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[13].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[13].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[13].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[13].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[13].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[13].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[13].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[17].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[17].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[17].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[17].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[17].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[17].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[17].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[17].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[25].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[25].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[25].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[25].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[25].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[25].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[25].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[25].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <van-nav-bar title="更多小米手机产品 >" style="border-top:1px solid #ccc"></van-nav-bar>
    <div class="multi_cell222">
      <a href="###" style="width:100%">
        <img :src="body_data[16].body.items[0].img_url" alt />
      </a>
    </div>
    <div class="multi_cell222">
      <a href="###" style="width:100%">
        <img :src="body_data[19].body.items[0].img_url" alt />
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[21].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[21].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[21].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[21].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[21].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[21].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[21].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[21].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[24].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[24].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[24].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[24].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[24].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[24].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[24].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[24].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <div class="list_two_type13">
      <a href="###">
        <div class="img">
          <img
            :src="body_data[27].body.items[0].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[27].body.items[0].product_name}}</p>
          <p class="brief">{{body_data[27].body.items[0].product_brief}}</p>
          <p class="price">
            ￥{{body_data[27].body.items[0].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
      <a href="###">
        <div class="img">
          <img
            :src="body_data[27].body.items[1].img_url"
            alt
          />
        </div>
        <div class="txt">
          <p class="name">{{body_data[27].body.items[1].product_name}}</p>
          <p class="brief">{{body_data[27].body.items[1].product_brief}}</p>
          <p class="price">
            ￥{{body_data[27].body.items[1].product_price}}
            <span>起</span>
          </p>
          <div class="buybtn mauto">立即购买</div>
        </div>
      </a>
    </div>
    <van-nav-bar title="更多小米电视产品 >" style="border-top:1px solid #ccc"></van-nav-bar>
    <div class="multi_cell222">
      <a href="###" style="width:100%">
        <img :src="body_data[70].body.items[0].img_url" alt />
      </a>
    </div>
    <van-loading size="24px" vertical v-if="!body_data">加载中...</van-loading>
  </div>
</template>
<script>
import {
  mapActions
  //mapState
} from "vuex";
export default {
  data() {
    return {
      name: "Home",
      body_data: ""
    };
  },
  methods: {
    ...mapActions(["setdata"])
  },
  computed: {
    getdata() {
      return this.$store.getters.getdata;
    }
  },
  watch: {
    getdata(val) {
      this.body_data = val;
    }
  },
  created() {
    this.setdata();
    // cons
  }
};
</script>
<style lang="less" scoped>
#clearfix() {
  &::after {
    content: ".";
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
}
.main {
  .van-swipe {
    margin-top: 1.651866rem;
  }
  .van-swipe /deep/ .van-swipe__indicators {
    bottom: 0.905862rem;
    .van-swipe__indicator {
      width: 0.426288rem;
      height: 0.426288rem;
    }
  }
  .exposure {
    .cells_auto_fill {
      display: flex;
      a {
        display: block;
      }
    }
  }
  .multi_cell222 {
    #clearfix();
    margin-top: 0.26643rem;
    a {
      float: left;
      width: 50%;
      img {
        width: 100%;
      }
    }
  }
  .van-loading {
    top: 1.865011rem;
  }
  .list_two_type13 {
    display: flex;
    a {
      margin-right: 0.319716rem;
      .img {
        img {
          width: 100%;
        }
      }
      .txt {
        padding: 0.639432rem;
        text-align: center;
        .name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgba(0, 0, 0, 0.87);
          font-size: 0.746004rem;
        }
        .brief {
          color: rgba(0, 0, 0, 0.54);
          font-size: 0.586146rem;
          margin-top: 0.159858rem;
          line-height: 1.06572rem;
        }
        .price {
          color: #ea625b;
          font-size: 0.692718rem;
          line-height: 0.959148rem;
        }
        .buybtn {
          font-weight: 700;
          text-align: center;
          color: #fff;
          background: #ea625b;
          width: 6.55418rem;
          margin: 0 auto;
          padding: .53286rem 0;
          font-size: .692718rem;
        }
      }
    }
  }
}
</style>