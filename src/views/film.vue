<!-- 
    相关知识点 
    1.数据懒加载(即先请求一部分数据展示给用户，用户阅读完毕再发送ajax请求数据)
      屏幕滚动监听 window.onscroll 注意：在不使用 window.onscroll需为监听滚动的元素设置高度和overflow
      滚动条的问题：何时会出现滚动条？(子元素溢出父级元素,默认在视口上) 利用滚动条懒加载(数据，非图片)

    2.吸顶灯效果：屏幕滚动一定距离固定定位某一元素(一般固定在顶部)  
      屏幕滚动距离(即距离顶端的距离 滚动条滚动的距离) window.pageYoffset || html.scrollTop ( X body.scrollTop)
      元素的宽高 offsetWidth/offsetHeight = clientWidth/height+padding*2
      子元素相对父元素的偏移量(包括定位偏移量) offset Left/Top

  **这里利用根元素wrap的滚动条实现了以上两个效果 应用知识点：ref&父级元素调用子元素的方法**

    3.伪元素的利用
    4.class/style绑定
    5.scoped style标签添加scoped属性后，当前vue文件所有dom节点都会添加一个data-v-的属性，编译后的css选择器变为属性选择器
              注：复合页面的子页面的最外层div节点会被添加两个data-v-属性，因此区别命名最外层的div选择器
-->

<template>
  <div id="wrap" ref="wrap">
    <!--    <swiper :key="list.length" ref="test">
              <li class="swiper-slide" v-for="data in list" :key="data.bannerId">
                 <img :src="data.imgUrl" style="height:213px;" />
              </li>
            </swiper>
    -->
    <div :class="is?'isfixed':null">
      <p :style="is?'display:block;':'display:none;'">电影</p>
      <div id="nav" ref="nav">
        <ul>
          <router-link to="/film/nowplaying" tag="li" activeClass="myactive">正在热映</router-link>
          <router-link to="/film/commingsoon" tag="li" activeClass="myactive">即将上映</router-link>
        </ul>
      </div>
    </div>

    <router-view ref="expand"></router-view>
  </div>
</template>

<script>
// import swiper from "../components/swiper";
import axios from "axios";
export default {
  data() {
    return {
      list: ["11", "222", "333"],
      is: false,
    };
  },
  /*  components: {
    swiper,
  }, */
  mounted() {
    axios({
      url: "https://m.maizuo.com/gateway?type=2&cityId=310100&k=9961578",
      mothod: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"310100"}',
        "X-Host": "mall.cfg.common-banner",
      },
    }).then((res) => {
      this.list = res.data.data;
    });
    // 屏幕滚动监听
    this.$refs.wrap.onscroll = this.scrollEvent;
  },
  methods: {
    // 定义屏幕滚动事件
    scrollEvent() {
      // console.log(
      //   this.$refs.wrap.scrollTop + window.screen.height,
      //   this.$refs.nav.offsetHeight + this.$refs.expand.$el.offsetHeight
      // );

      // console.log(this.$refs.test.$el.offsetHeight);
      // console.log(this.$refs.test);
      // console.log(window.pageYOffset) 禁掉系统默认滚动条后(即滚动条在窗口/document上)，无法获取到值
      // console.log(this.$refs.wrap.scrollTop);
      if (this.$refs.wrap.scrollTop < this.$refs.nav.offsetHeight) {
        this.is = false;
      } else {
        this.is = true;
        if (
          this.$refs.wrap.scrollTop + window.screen.height >=
          this.$refs.expand.$el.offsetHeight
        ) {
          // 调用子元素的方法
          this.$refs.expand.expand();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// 正在热映/即将上映 选中样式
// 伪元素的位置？   .myactive里面的最后
/* .myactive::after {
  content: " ";
  display: block; //必须项
  width: 100%; //四个文字的大小
  height: 2px;
  background-color: #ff5f16;
} */
.myactive {
  color: #ff5f16;
}
//设置以触发滚动事件
#wrap {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 3rem;
    color: #191a1b;
  }
  p::after {
    content: "";
    display: block;
    width: 100vw;
    border: 1px solid #ededed;
    transform: scaleY(0.5);
  }
}

#nav {
  height: 6.5vh;
  width: 100%;
  position: relative;
  ul {
    display: flex;
    li {
      /* 
         flex:1;对比在父元素设置justify-content:space-between;
               justify-content:space-between;元素占据其本身大小的空间，横向margin等分横向剩余空间
               flex:1;元素(比例)吞并剩余空间
       */
      flex: 1;
      text-align: center;
      font-size: 14px;
      line-height:6.5vh;
      position: relative;
    }
  }
}
// nav下面的分隔条
#nav::after {
  content: "";
  display: block;
  width: 100%;
  border: 1px solid #ededed;
  transform: scaleY(0.5);
  position: absolute;
  bottom: 0;
}
// 固定，吸顶灯效果
.isfixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}
</style>    