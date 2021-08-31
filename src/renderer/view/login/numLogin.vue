<template>
  <div class="login-wrap">
    <div class="num-wrap">
      <img src="/static/login_bg.png" alt="" />
      <div class="num-input">
        <VuePhoneNumberInput v-model="phontNum" :no-example="true" />
        <div class="password-input">
          <input type="password" class="password" v-model="password" placeholder="请输入密码" />
          <span class="reset" @click="reset">重设密码</span>
        </div>
      </div>
      <el-button type="danger" style="width:100%; padding:10px;margin-bottom: 15px" @click="handleLogin">登陆</el-button>
      <p style="margin-bottom:30px"><span class="pointer" @click="register">注册</span></p>
      <p class="policy">
        <small><el-checkbox v-model="checked"></el-checkbox>同意<b>《服务条款》</b><b>《隐私政策》</b><b>《儿童隐私政策》</b></small>
      </p>
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { login } from '../../api/login/api.js'
import { setStore } from '../../utils/utils'

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
    handleLogin() {
      login({
        phone: this.phontNum.replace(/\s+/g, ''),
        password: this.password
      })
        .then((result) => {
          setStore('userInfo', result)
        })
        .catch((err) => {})
    },
    reset() {
      this.$router.push({ path: '/user/reset' })
    },
    register() {
      if (this.checked === false) {
        this.$message.error('请先勾选协议')
      } else {
        this.$router.push({ path: '/user/register' })
      }
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
      margin-bottom: 30px;
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
