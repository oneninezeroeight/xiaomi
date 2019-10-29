
  <template>
  <div>
    <div class="login-wrap">
      <div class="logo">
        <img src="./img/logo.png" style="width:2.544179rem;height:2.544179rem" alt />
        <h3>小米账号登录</h3>
      </div>
    </div>
    <div>
      <div class="lgn_inputbg c_b login-panel pwdLogin">
        <!--验证用户名-->
        <div class="single_imgarea" id="account-info">
          <div class="na-img-area" id="account-avator">
            <div class="na-img-bg-area" id="account-avator-con"></div>
          </div>
          <p class="us_name tac" id="account-displayname"></p>
          <p class="us_id tac"></p>
        </div>
        <label id="region-code" class="labelbox login_user c_b disable" for>
          <div class="turn_area">
            <a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a>
          </div>
          <div class="country_list">
            <div class="animation countrycode_selector" id="countrycode_selector">
              <span class="country_code">
                <tt style="display:none;" class="countrycode-value" id="countrycode_value">+86</tt>
                <i class="icon_arrow_down"></i>
              </span>
            </div>
          </div>
          <input
            class="item_account"
            autocomplete="off"
            type="text"
            name="user"
            id="username"
            placeholder="邮箱/手机号码/小米ID"
            _type="text"
          />
          <input type="hidden" name="log" id="debug_log" />
          <div id="btn-clear-link" class="clear_link_panel">
            <span class="clear_link"></span>
          </div>
        </label>
        <div class="country-container" id="countrycode_container">
          <div class="country_container_con" id="countrycode_container_con"></div>
        </div>
        <label class="labelbox pwd_panel c_b">
          <input
            class="item_account"
            type="password"
            placeholder="密码"
            autocomplete="off"
            id="pwd"
            name="password"
            _type="password"
          />
          <div id="sms-code-panel" class="code_panel" style="display:none;">
            <a class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</a>
          </div>
          <!-- 登录按钮 -->
          <div class="btns_bg">
            <input class="btnadpt" id="login-button" type="submit" value="登录" />
          </div>
          <!-- 切换登录方式按钮 -->
          <div class="other_panel clearfix">
            <span id="custom_display_256" class="sms_link">
              <a
                href="javascript:;"
                class="btnadpt btn_gray login_type_link"
                id="ChangeLoginType"
              >手机短信登录/注册</a>
            </span>
            <div class="reverse">
              <div class="n_links_area" id="custom_display_64" style>
                <a class="outer-link" href="#">立即注册</a>
                <span>|</span>
                <a class="outer-link" href="#">忘记密码？</a>
              </div>
            </div>
            <!-- 其他登录方式 s -->
            <div
              style="display: block;"
              class="other_login_type sns-login-container"
              id="custom_display_16"
            >
              <fieldset class="oth_type_tit">
                <legend align="center" class="oth_type_txt">其他方式登录</legend>
              </fieldset>
              <div id="sns-login-links" class="oth_type_links">
                <a
                  class="icon_type btn_qq sns-login-link"
                  data-type="qq"
                  href="#"
                  title="QQ登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_qq"></i>
                </a>
                <a
                  class="icon_type btn_weibo sns-login-link"
                  data-type="weibo"
                  href="#"
                  title="微博登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_weibo"></i>
                </a>
                <a
                  class="icon_type btn_alipay sns-login-link"
                  data-type="alipay"
                  href="#"
                  title="支付宝登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_alipay"></i>
                </a>
                <a
                  class="icon_type btn_weixin sns-login-link"
                  data-type="weixin"
                  href="#"
                  title="微信登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_weixin"></i>
                </a>
              </div>
            </div>
            <!-- 其他登录方式 e -->
            <p class="acq_tips" style="display: none;"></p>
          </div>
        </label>
      </div>
    </div>
    <!-- 底部组件 -->
    <Asiders />
  </div>
</template>

<script>
import Asiders from "./Aside";
// window.console.log(Asiders)
// import Vue from "vue";
// Vue.component("Asider", Asider);
export default {
  components: {
    Asiders
  }
};
</script>
<style lang="less">
.logo {
  padding-top: 2.650186rem;
  padding-bottom: 0.530037rem;
  h3 {
    padding-top: 0.795056rem;
    font-size: 0.954067rem;
  }
}
.login-wrap {
  text-align: center;
}
.item_account {
  text-align: left;
  display: block;
  width: 80%;
  line-height: 2.120149rem;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  font-size: 0.84806rem;
}
.btns_bg {
  padding-top: 1.272089rem;
  .btnadpt {
    width: 80%;
    padding: 0.530037rem 0;
    display: block;
    margin-bottom: 0.742052rem;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 0.318022rem;
    overflow: hidden;
    background-color: #ff6700;
    margin: auto;
  }
}

// 登录注册按钮
.btn_gray {
  background: #fff;
  margin-top: 0.530037rem;
  border: 1px solid #d3d3d3;
  color: #000;
}
.btnadpt {
  width: 80%;
  padding: 0.50186rem 0;
  display: block;
  margin: 1.272089rem auto;
  margin-bottom: 14px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.318022rem;
}
.reverse .n_links_area a {
  padding: 0 9px;
  font-size: 0.84806rem;
  color: #9b9b9b;
}
// 其他登录方式
.other_login_type {
  width: 80%;
  margin: auto;
  padding-top: 40px;
  text-align: center;
}
.oth_type_tit {
  border: none;
  padding-top: 0.530037rem;
}
.oth_type_txt {
  font-size: 0.636045rem;
  color: #b0b0b0;
  width: 4.240298rem;
}
.btn_sns_icontype {
  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png)
    no-repeat;
  display: block;
  width: 18px;
  height: 18px;
  margin: 5px auto 0;
}
</style>
