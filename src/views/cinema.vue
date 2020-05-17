<template>
  <!--问题：details中同样是异步请求数据，为什么这里不加v-if可行，details中不行？
  因为空的数组也是可遍历的，大不了没有值， 但是details中遍历的是filmInfo的属性  读取null（初始化时）的属性会报错
  -->

  <div>
    <!-- better-scroll的结构   容器 -> 内容区 -->
    <section class="wraper" :style="{height:gaodu,}">
      <ul class="content">
        <li v-for="cinema in cinemas" :key="cinema.cinemaId">
          <h2>{{cinema.name}}</h2>
          <p>{{cinema.address}}</p>
        </li>
      </ul>
    </section>
  </div>
</template> 
<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      cinemas: [],
      gaodu: null
    };
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=500100&ticketFlag=1&k=1100545",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"440300"}',
        "X-Host": "mall.film-ticket.cinema.list"
      }
    }).then(res => {
      console.log(res.data);
      this.cinemas = res.data.data.cinemas;
    });

    // 为better-scroll动态设置容器大小
    this.gaodu = window.screen.height - 50 + "px";
    // console.log(this.gaodu);
    new BScroll(".wraper", {
      // scrollY: true,默认

      // 开启滚动条，默认为false
      scrollbar: {
        fade: true,
        interactive: false // 1.8.0 新增
      }
    });
  }
};
</script>
<style lang="scss" scoped>
section li {
  background-color: aqua;
  margin: 10px auto;
}
.wraper {
  overflow: hidden;

  // 滚动条不超出.wraper的边界
  position: relative;
}
</style>   