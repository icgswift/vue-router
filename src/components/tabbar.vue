<template>
  <nav>
    <router-link to="/film" tag="li" activeClass="myactive">
      <!--使用iconfont图标替换图片图标 ：可以为其设置颜色，图片则不可，但相比图片色彩较为单一 -->
      <i class="iconfont icon-good"></i>
      电影
    </router-link>

    <router-link to="/cinema" tag="li" activeClass="myactive">
      <i class="iconfont icon-all"></i>
      影院
    </router-link>

    <router-link to="/center" tag="li" activeClass="myactive">
      <i class="iconfont icon-favorite"></i>
      个人中心
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
//设置activeClass选中样式
.myactive {
  color: red;
}

//这里用nav包裹和用div包裹差异巨大，可见H5新标签不只是名称上的变化，而是有实际用处的实现        ************错误，应为没有将css样式局限在本组建中，导致后面的组件收到影响 使用nav标签如不设置scoped同样如此********

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  display: flex;
  height: 50px;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>