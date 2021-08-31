<template>
  <div class="login-wrap">
    <div class="qr-wrap" v-if="!numLogin">
      <h1>扫码登录</h1>
      <div class="qr-container">
        <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
          <img src="/static/qr_guide.png" v-if="controlGuide" />
        </transition>

        <div class="link" @mouseenter="enter" @mouseleave="leave">
          <img v-if="qrimg" :src="`data:image/png;base64${qrimg}`" alt="qrCode" :width="width" :height="height" />
          <p>使用<b @click="qrLogin" style="color: rgb(6, 84, 121);cursor: pointer;">网易云APP</b>扫码登录</p>
        </div>
      </div>
      <p style="cursor:pointer" @click="loginWthNum">选择其他登陆模式 ></p>
    </div>
    <div class="num-wrap" v-else>
      <img src="/static/login_bg.png" alt="" />
      <div class="num-input">
        <VuePhoneNumberInput v-model="phontNum" />
        <div class="password-input">
          <input type="password" class="password" v-if="!isReset" v-model="password" placeholder="请输入密码" />
          <input type="password" class="password" v-else v-model="resetPassword" placeholder="密码重置" />
          <span class="reset" @click="reset">重设密码</span>
        </div>
      </div>
      <el-button type="danger" style="width:100%; padding:10px;margin-bottom: 30px">登陆</el-button>
      <p><span class="pointer">注册</span></p>
      <p class="policy">
        <small><el-checkbox v-model="checked"></el-checkbox>同意<b>《服务条款》</b><b>《隐私政策》</b><b>《儿童隐私政策》</b></small>
      </p>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { qrKey, qrCreate } from '../../api/login/api.js'
import { shell } from 'electron' // eslint-disable-line
export default {
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      qrimg: null,
      s: null,
      controlGuide: true,
      animate__leftFade: '',
      width: '150',
      height: '150',
      position: '',
      numLogin: false,
      phontNum: '',
      isReset: false,
      password: '',
      resetPassword: '',
      checked: false
    }
  },

  mounted() {
    qrKey()
      .then((result) => {
        qrCreate({
          key: result.data.unikey,
          qrimg: 1
        })
          .then((result) => {
            this.qrimg = result.data.qrimg
          })
          .catch((err) => {})
      })
      .catch((err) => {})
  },

  methods: {
    qrLogin() {
      // 内置 shell 模块供与桌面集成相关的功能，在用户的默认浏览器中打开 URL
      shell.openExternal('https://music.163.com/#/download')
    },
    enter() {
      this.width = '200'
      this.height = '200'
      this.controlGuide = false
    },
    leave() {
      this.width = '150'
      this.height = '150'
      this.controlGuide = true
    },
    loginWthNum() {
      this.numLogin = true
    },
    reset() {
      this.isReset = true
    }
  }
}
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  text-align: center;
  .qr-container {
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .link img {
    transition: all 2s;
  }
  .num-wrap {
    width: 70%;
    margin: 0 auto;
    position: relative;
    #MazPhoneNumberInput .country-selector__input {
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }
    .password {
      border: 1px solid #ccc;
      width: 100%;
      border-top: 0;
      display: block;
      height: 35px;
      padding: 10px;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }
    .password-input {
      position: relative;
      margin-bottom: 80px;
      .reset {
        cursor: pointer;
        position: absolute;
        right: 7px;
        top: 10px;
        color: #333;
      }
    }
  }
  .policy b {
    color: rgb(6, 84, 121);
    cursor: pointer;
  }
}
</style>
