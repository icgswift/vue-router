<template>
  <div>
    <mt-button type="primary">成功</mt-button>
    <ul>
      <li v-for="(data,index) in list" :key="index" @click="handleClick(data.filmId)">
        <img :src="data.poster" />
        <p>{{data.name}}</p>
        <p>观众评分{{data.grade}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios";

//全局引入 JScomponents单独再引入一次
/* import {Toast } from "mint-ui";
 */

// 局部引入     JScomponents需单独引入
/* import mint, { Toast } from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(mint); */

import { Toast } from "mint-ui";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    handleClick(id) {
      Toast({
        message: "操作成功",
        iconClass: "icon iconfont icon-success"
      });

      //命名路由方式
      this.$router.push({
        name: "details",
        params: { id }
      });
    }
  },
  mounted() {
    // 通过添加请求头获取数据，这是网站设置的请求障碍
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=420100&pageNum=1&pageSize=10&type=1&k=5491072",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list"
      }
    }).then(res => {
      // console.log(res.data);
      this.list = res.data.data.films;
      // console.log(this.list);
    });
  }
};
</script>

<style lang="scss" scoped>
.empty {
  height: 36px;
  width: 100%;
}
</style>