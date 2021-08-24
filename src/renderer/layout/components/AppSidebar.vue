<template>
  <div id="sideBar">i am sidebar</div>
</template>

<script>
export default {
  name: '',
  props: [''],
  data() {
    return {
      isOpen: false
    }
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
}
</script>
<style lang="scss" scoped>
#sideBar {
  float: left;
  min-width: 150px;
  height: 100%;
  background-color: blue;
}
</style>
