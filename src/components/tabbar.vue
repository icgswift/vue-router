<template>
  <nav>
    <router-link to="/film" tag="li" activeClass="myactive">
      <!--使用iconfont图标替换图片图标 ：可以为其设置颜色，图片则不可，但相比图片色彩较为单一 -->
      <i class="iconfont icon-dianying"></i>
      电影
    </router-link>

    <router-link to="/cinema" tag="li" activeClass="myactive">
      <i class="iconfont icon-yingyuan"></i>
      影院
    </router-link>

    <router-link to="/center" tag="li" activeClass="myactive">
      <i class="iconfont icon-wode"></i>
      个人中心
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
//设置activeClass选中样式
.myactive {
  color: orange;
  // 可以将iconfont看做文本标签，但设置文本颜色默认不起作用，需为其单独设置
  .iconfont{
    color: orange;
  }
}
.iconfont {
  font-size: 25px;
  color: gray;
}

//这里用nav包裹和用div包裹差异巨大，可见H5新标签不只是名称上的变化，而是有实际用处的实现        ************错误，应为没有将css样式局限在本组件中，导致后面的组件收到影响 使用nav标签如不设置scoped同样如此********

// 为了使nav标签有更好的显示效果，需禁止系统横向滚动条（出现横向滚动条使固定定位跳动）
/* 1、查看是否在head里面加入
        等比例缩放   没有作用
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
         禁止缩放   
       <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
2、查看width:100%的元素是否有内外边距，使宽度超过100%

3、添加以下CSS代码
    html，body{
         overflow-x: hidden;      
         } */

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: white;
  display: flex;
  height: 50px;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    text-align: center;
  }
}
</style>