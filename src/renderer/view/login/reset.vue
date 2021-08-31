<template>
  <div class="login-wrap">
    <div class="num-wrap">
      <img src="/static/login_bg.png" alt="" />
      <div class="num-input">
        <VuePhoneNumberInput v-model="phontNum" />
        <div class="password-input">
          <input type="password" class="password" v-model="password" placeholder="设置登陆密码" />
        </div>
        <p style="margin-bottom: 20px"><small>密码8-20位，至少包含字母/数字/字符2中组合</small></p>
      </div>
      <el-button type="danger" style="width:100%; padding:10px;margin-bottom: 30px">下一步</el-button>
      <p><small @click="goBack" class="pointer"> &#60; 返回登陆</small></p>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
export default {
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      phontNum: '',
      password: ''
    }
  },
  methods: {
    goBack() {
      window.history.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  text-align: center;
  .num-wrap {
    width: 80%;
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
      margin-bottom: 10px;
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
