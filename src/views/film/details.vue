<template>
  <div>
    <section v-if="filmInfo">
      <header>
        <!-- 初次渲染，filmInfo没有值， null.name导致报错    这里设置初始不显示 -->
        <img class="target-img" :src="filmInfo.poster" />
        <p>{{filmInfo.name}}</p>
      </header>

      <!--以下swiper传递两个props (preview，class) class用于swiper区别初始化   但是vue中class不能作为props传递，需传递一个相同值的attribute : myclass -->
      <main>
        <h1>演职人员</h1>
        <swiper preview="2" class="actorSwiper" myClass="actorSwiper">
          <li class="swiper-slide" v-for="(actor,index) in filmInfo.actors" :key="index">
            <img :src="actor.avatarAddress" />
            <p>{{actor.name}}</p>
          </li>
        </swiper>
      </main>

      <footer>
        <h1>剧照</h1>
        <swiper preview="3" class="photoSwiper" myClass="photoSwiper">
          <li class="swiper-slide" v-for="(photo,index) in filmInfo.photos" :key="index">
            <img :src="photo" />
          </li>
        </swiper>
      </footer>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import "swiper/css/swiper.css";
import swiper from "../../components/detailSwiper";

export default {
  data() {
    return {
      filmInfo: null
    };
  },
  mounted() {
    // console.log("子组件挂载完毕");
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=4345852`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"421000"}',
        "X-Host": "mall.film-ticket.film.info"
      }
    }).then(res => {
      // console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;
    });
  },
  components: {
    swiper
  },
  beforeMount() {
    // this.$store.state.msg = false;
    this.$store.commit("test", false);
    /*  不要直接修改state的值
        $store.commit提交mutation更改state的值   参数一：'test' mutation事件名  参数二：传递的data
           1.追踪状态变化
           2.便于调试，实现事件穿梭 
    */
  },
  beforeDestroy() {
    // this.$store.state.msg = true;
    this.$store.commit("test", true);
  }
};
</script>
<style lang="scss" scoped>
.target-img {
  width: 100%;
}
main img {
  width: 123px;
  height: 163px;
  margin: 10px;
}
footer img {
  width: 200px;
  height: 200px;
}
</style>