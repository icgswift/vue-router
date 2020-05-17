<template>
  <div>
    <tabbar v-if="msg"></tabbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";

// 引入事件总线
import bus from "@/bus.js";

export default {
  data() {
    return {
      msg: true
    };
  },

  components: {
    tabbar: Tabbar
  },

  /* 祖先组件和子组件生命周期有严格的顺序，因此事件总线的发布与订阅有时机问题 */
  mounted() {
    console.log("父组件挂载完毕");
  },
  beforeMount() {
    console.log("父组件开始挂载");
    bus.$on("msg", data => {
      this.msg = data;
    });
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

li {
  list-style: none;
}
</style>