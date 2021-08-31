<template>
  <div class="login-wrap">
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
    <p style="cursor:pointer"><router-link to="/user/numlogin">选择其它登陆模式 ></router-link></p>
    <!-- <p style="cursor:pointer" @click="toReset">选择其他登陆模式 ></p> -->
  </div>
</template>

<script>
import { qrKey, qrCreate } from '../../api/login/api.js'
import { shell } from 'electron' // eslint-disable-line
export default {
  data() {
    return {
      qrimg: null,
      controlGuide: true,
      animate__leftFade: '',
      width: '150',
      height: '150',
      position: ''
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
    toReset() {
      this.$router.push({ path: '/user/reset' })
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
}
</style>
