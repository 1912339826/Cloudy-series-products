<template>
  <div id="list">
    <div class="list" v-for="(item, index) in datas" :key="index" @click="change(index,item.id)">
      <div :class="ischange==index?'list_div_active':'list_div'">
        <div class="box">
          <div>{{item.title}}</div>
          <img src="../../assets/images/箭头_03_03.png" alt class="arrows" v-if="ischange==index" />
        </div>
        <img :src="item.path" alt class="backgroundImg" />
      </div>
    </div>
  </div>
</template>
<script>
import { getDirectoryDto } from "@/request/api";
export default {
  name: "list",
  data() {
    return {
      changename: "",
      ischange: 0,
      datas: [],
      imgs: []
    };
  },
  mounted() {
    this.getDirectoryDto(this.$route.query.id);
  },
  watch: {
    $route(news, olds) {
      if (news.meta.zIndex == 0) {
        this.ischange = 0;
      }
    }
  },
  methods: {
    change(index, id) {
      this.ischange = index;
      this.$router.push({
        path: `/Preview`,
        query: {
          id: id
        }
      });
    },
    getDirectoryDto(id) {
      getDirectoryDto({
        id: id
      }).then(res => {
        this.imgs = [];
        // 获取数据成功后的其他操作
        this.datas = res.data.result;
      });
    }
  },
  activated() {
    if (!!this.$route.query.id) {
      this.getDirectoryDto(this.$route.query.id);
    }
  }
};
</script>
<style lang="less">
#list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .list {
    width: 87vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8vw;
    img {
      width: 87vw;
    }
    .list_div_active {
      z-index: 0;
      width: 87vw;
      height: 30vw;
      position: relative;
      .box {
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(240, 248, 255, 0.753);
        position: absolute;
        justify-content: center;
        align-items: center;
        display: flex;
        div {
          font-size: 1rem;
        }
        .arrows {
          width: 5vw;
          margin-left: 1vw;
        }
      }
      .backgroundImg {
        width: 87vw;
        height: 30vw;
        z-index: 1;
        position: absolute;
      }
    }
    .list_div {
      z-index: 0;
      width: 87vw;
      height: 30vw;
      position: relative;
      .box {
        width: 100%;
        height: 100%;
        z-index: 2;
        position: absolute;
        justify-content: center;
        align-items: center;
        display: flex;
        div {
          color: #ffffff;
          font-size: 1rem;
        }
      }
      .backgroundImg {
        width: 87vw;
        height: 30vw;
        z-index: 1;
        position: absolute;
      }
    }
  }
}
</style>