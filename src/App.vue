<template>
  <div>
    <tabbar></tabbar>

    <!-- 路由容器    切换不同DOM时 路由容器展示不同路由页面 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入import要在script标签中
// import Navbar from "./components/navbar.vue";
// import Sidebar from "./components/sidebar.vue";
import Tabbar from "@/components/tabbar";

export default {
  data() {
    return {};
  },

  // 局部注册
  components: {
    // navbar: Navbar,
    // sidebar: Sidebar,
    tabbar: Tabbar
  }
};
</script>

// scoped   指定css作用域，局限在当前文件
<style lang='scss' scoped>
ul {
  list-style: none;
  li {
    background-color: aqua;
  }
}
</style>