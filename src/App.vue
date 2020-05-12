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

/* 组件样式设置在组件内部
tabbar {
  position: absolute;
  bottom: 0;
} */
</style>