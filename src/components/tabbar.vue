<template>
  <div>
    <ul>
      <!-- 
               声明式导航 ：通过标签名

                 使用a标签调出路由使用相对路径  
         <li>
        <a href="#/film">电影</a>
      </li>
      <li>
        <a href="#/cinema">影院</a>
      </li>
      <li>
        <a href="#/center">个人中心</a>
      </li>-->
      <!-- 
   to指明路径  (主页路径省略) /路由路径          tag指定生成标签名   activeClass 为选中标签设置样式   class首字母大写 
      -->
      <router-link to="/film" tag="li" activeClass="myactive">电影</router-link>

      <router-link to="/cinema" tag="li" activeClass="myactive">影院</router-link>

      <router-link to="/center" tag="li" activeClass="myactive">个人中心</router-link>
    </ul>
  </div>
</template>
<style lang="scss">
.myactive {
  color: red;
}
</style>