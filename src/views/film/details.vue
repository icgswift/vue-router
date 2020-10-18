<template>
  <div>
    <!-- 初次渲染，filmInfo没有值， null.XXX导致报错 这里设置初始化不显示  下面两个swiper子组件初始没有加载-->
    <section v-if="filmInfo">
      <header>
        <img class="target-img" :src="filmInfo.poster" />
      </header>

      <!--以下swiper传递两个props (preview，class) class用于swiper区别初始化   但是vue中class不能作为props传递，需传递一个相同值的attribute : myclass -->
      <main>
        <h1>演职人员</h1>
        <swiper preview="2" class="actorSwiper" myClass="actorSwiper">
          <li
            class="swiper-slide"
            v-for="(actor, index) in filmInfo.actors"
            :key="index"
          >
            <img :src="actor.avatarAddress" />
            <p>{{ actor.name }}</p>
          </li>
        </swiper>
      </main>

      <footer>
        <h1>剧照</h1>
        <swiper preview="3" class="photoSwiper" myClass="photoSwiper">
          <li
            class="swiper-slide"
            v-for="(photo, index) in filmInfo.photos"
            :key="index"
          >
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

import { show_tabbar_mutation, hide_tabbar_mutation } from "@/type";

export default {
  data() {
    return {
      filmInfo: null,
    };
  },
  mounted() {
    console.log("detail挂载");
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=4345852`,
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"421000"}',
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log('detail请求数据完毕')
      this.filmInfo = res.data.data.film;
    });
  },
  components: {
    swiper,
  },

  beforeMount() {
    this.$store.commit(hide_tabbar_mutation);
  },
  beforeDestroy() {
    this.$store.commit(show_tabbar_mutation);
  },
};
</script>


<style lang="scss" scoped>
/* 处理后端请求的图片尺寸  设置一维(宽或高)的数据，另一维自适应 百分比参照其父元素*/
section {
  text-align: center;
}
.target-img {
  width: 100%;
}
h1{
  margin-left:10vw;
}
main img {
  width: 123px;
}
footer img {
  width: 120px;
} 
</style>