<template>
  <div>
    <swiper :key="list.length" ref="test">
      <li class="swiper-slide" v-for="data in list" :key="data.bannerId">
        <img :src="data.imgUrl" style="height:213px;" />
      </li>
    </swiper>

    <div :class="is?'isfixed':null" id="nav">
      <ul>
        <!--动态绑定class  -->
        <router-link to="/film/nowplaying" tag="li" activeClass="myactive">正在热映</router-link>
        <router-link to="/film/commingsoon" tag="li" activeClass="myactive">即将上映</router-link>
      </ul>
      <div class="test"></div>
    </div>
    <router-view></router-view>
    <!-- 用于测试吸顶灯效果 -->
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import swiper from "../components/swiper";
import axios from "axios";
export default {
  data() {
    return {
      list: ["11", "222", "333"], //在使用轮播时，初始不为空可能有一定问题，原因swiper初始化过早的问题，涉及异步请求完成后初始化swiper
      is: false
    };
  },
  components: {
    swiper
  },
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=310100&k=9961578",
      mothod: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"310100"}',
        "X-Host": "mall.cfg.common-banner"
      }
    }).then(res => {
      console.log(res.data);
      this.list = res.data.data;
    });

    //为窗口Window绑定事件监听    不要加括号立即调用   window.onscroll=function(){}
    window.onscroll = this.test;
    /* = function() {
      // const doc = document.documentElement;
      //console.log(window.pageYOffset);
      // console.log(this);    window
      if (window.pageYOffset === this.$refs.test.offsetHeight) {
        this.is = true;
      }
    }; */
  },
  // 单页应用，绑定的全局监听 后续路由(组件)会持续作用，删除之
  // 组件的生命周期
  beforeDestroy() {
    window.onscroll = null;
  },
  methods: {
    test() {
      console.log(window.pageYOffset);
      console.log(this.$refs.test.$el.offsetHeight); // .$el拿到节点 和之前HTML页面上拿到节点不同 这里$refs.NAME拿到的是component组件

      if (window.pageYOffset >= this.$refs.test.$el.offsetHeight) {
        this.is = true;
      } else {
        this.is = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// nav选中样式
// 伪元素的位置？       .myactive里面的最后
.myactive:after {
  content: " ";
  display: block; //必须项
  width: 56px; //四个文字的大小
  height: 2px;
  background-color: #ff5f16;
  margin: auto;
}

#nav {
  background-color: white;
  ul {
    display: flex;
    margin-top: 10px;
    li {
      flex: 1;
      text-align: center;
      font-size: 14px;
    }
  }
  // nav下面的分隔条
  .test {
    content: "";
    display: block;
    width: 100%;
    border: 1px solid #ededed;
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
// 固定，吸顶灯效果
.isfixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>    