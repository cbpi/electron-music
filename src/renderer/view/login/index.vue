<template>
  <div class="login-wrap">
    <span class="closed" @click="closedLogin">✖️ </span>
    <h1>扫码登录</h1>
    <div class="qr-container">
      <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <img src="/static/qr_guide.png" v-if="controlGuide" />
      </transition>

      <transition name="custom-classes-transition" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div class="link animate__animated" :style="{ position: position }" @mouseenter="enter" @mouseleave="leave">
          <img v-if="qrimg" :src="`data:image/png;base64${qrimg}`" alt="qrCode" :width="width" :height="height" />
          <p>使用<b @click="qrLogin" style="color: rgb(6, 84, 121);cursor: pointer;">网易云APP</b>扫码登录</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { qrKey, qrCreate } from '../../api/login/api.js'
import { ipcRenderer, shell } from 'electron' // eslint-disable-line
export default {
  data() {
    return {
      qrimg: null,
      s: null,
      controlGuide: true,
      animate__leftFade: '',
      width: '150',
      height: '150',
      position: ''
    }
  },

  mounted() {
    this.showQr()
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
    closedLogin() {
      ipcRenderer.send('closedLogin')
    },
    qrLogin() {
      // 内置 shell 模块供与桌面集成相关的功能，在用户的默认浏览器中打开 URL
      shell.openExternal('https://music.163.com/#/download')
    },
    showQr() {
      // setTimeout(() => {
      //   this.controlGuide = false
      // }, 3000)
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
      this.position = 'unset'
    }
  },

  watch: {}
}
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  text-align: center;
  .closed {
    position: absolute;
    left: 10px;
    top: 0px;
  }
  .qr-container {
    height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .link img {
    transition: all 2s;
  }
}
</style>
