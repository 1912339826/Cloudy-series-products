<template>
  <div id="preview">
    <div class="box" v-html="totalPage"></div>
  </div>
</template>
<script>
import { getInformation } from "@/request/api";
export default {
  name: "preview",
  data() {
    return {
      totalPage: ""
    };
  },
  mounted() {
    this.isgetInformation(this.$route.query.id);
  },
  methods: {
    isgetInformation(id) {
      let arr = [];
      this.totalPage = "";
      getInformation({
        // id: "4d29352499964da7b212b96aa64a3fc8"
        id: id
      }).then(res => {
        //   // 获取数据成功后的其他操作
        res.data.result.map(item => {
          arr.push(item.content);
          this.totalPage = arr.join("");
        });
      });
    }
  },
  activated() {
    this.isgetInformation(this.$route.query.id);
  }
};
</script>
<style scoped>
#preview {
  width: 100%;
}
.box >>> img {
  margin-top: 2vw;
  display: block;
  width: 100vw;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
}
</style>