<template>
  <div>
    <section
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
    >
      <li v-for="cinema in cinemas" :key="cinema.cinemaId">
        <section>
        <h3>{{cinema.name}}</h3>
        <p>{{cinema.address}}</p>
        </section>
        <button onclick="alert('系统建设中')">查看</button>
      </li>
    </section>
  </div>
</template> 
<script>
import Vue from "vue";
import axios from "axios";
import {mapState} from 'vuex'

import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);

export default {
  data() {
    return {
      cinemas: [],
      loading: false,
    };
  },
  computed:{
   ...mapState(['cityId'])
  },
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&ticketFlag=1&k=1100545`,
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"440300"}',
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
  padding: 1vh 0;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-around;
  align-items: center;
 section{
  width: 60%;
  h3{
    color: #191a1b;
    font-size: 15px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    margin-bottom: 1vh;
  }
  p {
    color: #797d82;
    font-size: 12px;
    white-space: nowrap; //不换行
    overflow: hidden;
    text-overflow: ellipsis; //超出以...结尾
  }
 }
 button{
   width: 15%;
   height: 80%;
   color: #ff5f16;
   background-color: white;
   border: 1px solid #ff5f16;
   border-radius: 4px;
 }
}
</style>   