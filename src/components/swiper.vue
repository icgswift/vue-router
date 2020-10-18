<template>
  <div class="swiper-container film-swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

    <!-- 分页器 -->
    <div class="swiper-pagination film-swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  updated() {
    new Swiper(".film-swiper-container", {
      direction: "horizontal",
      loop: true,
      autoplay: {
        delay: 500,
      },

      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
// 设置分页器位置
.film-swiper-pagination {
  text-align: right;
}
.film-swiper-container {
  //设置分页器活动时颜色
  --swiper-theme-color: blue;
}
</style>