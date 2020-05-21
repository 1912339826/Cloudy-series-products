<template>
  <div id="home">
    <div class="top">
      <img src="../../assets/images/Home_top_03.jpg" alt />
    </div>
    <section class="content">
      <div v-for="(item, index) in datas" :key="index" class="child" @click="change(item,index)">
        <img src="../../assets/images/change_03.png" v-if="item.change" alt />
        <img src="../../assets/images/change_no_03.png" v-else alt />
        <div>{{item.name}}</div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      datas: [
        { name: "多云微营销", change: true, id: "1" },
        { name: "多云房产", change: false, id: "2" },
        { name: "多云电商", change: false, id: "3" }
      ]
    };
  },
  mounted() {},
  watch: {},
  methods: {
    change(change, index) {
      this.datas.map(item => {
        item["change"] = false;
      });
      this.datas[index]["change"] = true;
      document.title = change.name;
      this.$router.push({
        path: `/List`,
        query: {
          id: change.id
        }
      });
    }
  }
};
</script>
<style lang="less">
#home {
  width: 100vw;
  .top {
    img {
      width: 100vw;
    }
  }
  .content {
    margin-top: -46.7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .child {
      width: 87%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-top: 7vw;
      img {
        width: 100%;
      }
      div {
        position: absolute;
      }
    }
  }
}
</style>