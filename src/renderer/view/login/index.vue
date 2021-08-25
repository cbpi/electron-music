<template>
  <div class="login-wrap">
    <span class="closed" @click="closedLogin">✖️ </span>
    <h1>扫码登录</h1>
    <img v-if="qrimg" :src="`data:image/png;base64${qrimg}`" alt="" />
  </div>
</template>

<script>
import { qrKey, qrCreate } from '../../api/login/api.js'
import { ipcRenderer } from 'electron' // eslint-disable-line
export default {
  name: '',
  props: [''],
  data() {
    return {
      qrimg: null
    }
  },

  components: {},

  computed: {},

  beforeMount() {},

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
    closedLogin() {
      ipcRenderer.send('closedLogin')
    }
  },

  watch: {}
}
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .closed {
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>
