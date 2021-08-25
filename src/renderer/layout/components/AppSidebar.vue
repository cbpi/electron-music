<template>
  <div id="sideBar">
    <div class="np-control"></div>
    <div class="login" @click="handleLogin">
      <img src="../../assets/user.png" width="45" height="45" alt="" />
      <span>未登陆</span>
    </div>
    <ul class="menu">
      <li>
        <a href=""><span class="iconfont icon-yinle"></span> 发现音乐</a>
      </li>
      <li>
        <a href=""><span class="iconfont icon-weibiaoti2fuzhi15"></span> 私人FM</a>
      </li>
      <li>
        <a href=""><span class="iconfont icon-shipin"></span> 视频</a>
      </li>
      <li>
        <a href=""><span class="iconfont icon-pengyou"></span> 朋友</a>
      </li>
    </ul>
    <p class="group">我的音乐</p>
    <ul class="menu">
      <li>
        <a href=""><span class="iconfont icon-yinle"></span> iTunes音乐</a>
      </li>
      <li>
        <a href=""><span class="iconfont icon-weibiaoti2fuzhi15"></span> 下载管理</a>
      </li>
      <li>
        <a href=""><span class="iconfont icon-shipin"></span> 最近播放</a>
      </li>
    </ul>
    <p class="group sub-menu">创建的歌单</p>
    <ul class="menu">
      <li>
        <a href=""><span class="iconfont icon-xihuan"></span> 我喜欢的音乐</a>
        <span class="iconfont icon-huaban"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron' // eslint-disable-line

export default {
  name: '',
  props: [''],
  data() {
    return {}
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    handleLogin() {
      ipcRenderer.send('login')
    }
  },

  watch: {}
}
</script>
<style lang="scss" scoped>
#sideBar {
  float: left;
  min-width: 198px;
  height: 100%;
  background-color: #f1f1f1;
  padding: 0px 0;
  .np-control {
    height: 50px;
    background-color: #e8e7e7;
  }
  .login {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px 22px 0 22px;
    img {
      margin-right: 10px;
    }
  }
  .menu {
    list-style: none;
    padding: 0 0 10px 0;
    margin: 0;
    li {
      padding: 10px 22px;
      a {
        text-decoration: none;
      }
    }
    li:hover {
      background-color: rgb(194, 189, 189);
      a {
        color: #9a0f0f;
      }
    }
  }
  .group {
    padding: 10px 22px;
    color: #cac3c3;
    position: relative;
  }
  .sub-menu:after {
    content: '';
    position: absolute;
    left: 5px;
    top: 14px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 5px 0 5px;
    border-color: #cac3c3 transparent transparent transparent;
  }
}
</style>
