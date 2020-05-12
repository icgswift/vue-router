<template>
  <div>
    nowplaying
    <ul>
      <li v-for="(data,index) in list" :key="index" @click="handleClick(data)">{{data.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    handleClick(id) {
      console.log(id, this.$router);

      //编程式导航  对应声明式导航
      //   this.$router.push(`/details/${id}`);

      //命名路由方式
      this.$router.push({
        name: "details",
        params: { id: id }
      });
    }
  },
  mounted() {
    // 通过添加请求头获取数据，这是网站设置的请求障碍
    axios({
      url:
        "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7584431",
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