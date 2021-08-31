<template>
  <div class="login-wrap">
    <div class="num-wrap">
      <img src="/static/login_bg.png" alt="" />
      <div class="num-input">
        <VuePhoneNumberInput v-model="phontNum" />
        <div class="password-input">
          <input type="password" class="password" v-model="password" placeholder="请输入密码" />
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
export default {
  components: {
    VuePhoneNumberInput
  },
  data() {
    return {
      phontNum: '',
      password: '',
      checked: false
    }
  },
  methods: {
    reset() {
      this.$router.push({ path: '/user/reset' })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  text-align: center;
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
