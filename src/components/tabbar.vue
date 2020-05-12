<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" activeClass="myactive">
        <!--使用iconfont图标替换图片图标 ：可以为其设置颜色，图片则不可，但相比图片色彩较为单一 -->
        <i class="iconfont icon-all"></i>
        电影
      </router-link>

      <router-link to="/cinema" tag="li" activeClass="myactive">
        <i class="iconfont icon-cry"></i>
        影院
      </router-link>

      <router-link to="/center" tag="li" activeClass="myactive">
        <i class="iconfont icon-back"></i>
        个人中心
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss">
//设置activeClass选中样式
.myactive {
  color: red;
}

//这里用nav包裹和用div包裹差异巨大，可见H5新标签不只是名称上的变化，而是有实际用处的实现
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  // height: 50px;
  background-color: white;
  ul {
    display: flex;
    li {
      flex: 1;
      // line-height: 50px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>