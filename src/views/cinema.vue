<template>
  <div>
    <section
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="cinema in cinemas" :key="cinema.cinemaId">
        <h3>{{cinema.name}}</h3>
        <p>{{cinema.address}}</p>
      </li>
    </section>
  </div>
</template> 
<script>
import Vue from "vue";
import axios from "axios";

import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);

export default {
  data() {
    return {
      cinemas: [],
      loading: false,
    };
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=500100&ticketFlag=1&k=1100545",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"440300"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      this.cinemas = res.data.data.cinemas;
    });
  },
  methods: {
    loadMore() {
      console.log("到底了");
      this.loading = true;
    },
  },
};
</script>
<style lang="scss" scoped>
li {
  width: 100%;
  margin: 10px auto;
  padding-left: 2vw;
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
  h3{
    color: #191a1b;
    font-size: 15px;
  }
  p {
    color: #797d82;
    font-size: 12px;
    width: 70vw;
    white-space: nowrap; //不换行
    overflow: hidden;
    text-overflow: ellipsis; //超出以...结尾
  }
}
</style>   