<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less">
// less外部文件的使用
// @import url('./assets/less/index');
#app {
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.5vw;
    height: 2.76vw;
    z-index: 9999;
  }
  &::-webkit-scrollbar-track {
    width: 0.417vw;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a1dad2;
    border-radius: 0.208vw;
  }
}
</style>
