<template>
  <div id="mainContainer">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-main></app-main>
    <control-bar></control-bar>
  </div>
</template>

<script>
import { AppMain, AppSidebar, ControlBar, AppHeader } from './components'
export default {
  name: '',
  data() {
    return {}
  },

  components: {
    AppHeader,
    AppMain,
    AppSidebar,
    ControlBar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
}
</script>
<style lang="scss" scoped>
#mainContainer {
  height: 100%;
}
</style>
