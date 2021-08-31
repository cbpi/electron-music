<template>
  <div class="router-view">
    <span class="closed" @click="closedLogin">✖️ </span>
    <router-view></router-view>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron' // eslint-disable-line
export default {
  data() {
    return {}
  },
  methods: {
    closedLogin() {
      ipcRenderer.send('closedLogin')
    }
  }
}
</script>
<style lang="scss" scoped>
.router-view {
  overflow: hidden;
  position: relative;
  padding: 50px 0 0 0;
  .closed {
    position: absolute;
    left: 8px;
    top: 15px;
    cursor: pointer;
  }
}
</style>
