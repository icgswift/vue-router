<template>
  <div class="swiper-container detail-swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  props: ["preview", "myClass"],
  mounted() {
    // console.log(this.preview);
    new Swiper(`.${this.myClass}`, {
      slidesPerView: this.preview
    });
  }
};
</script>

<style lang="scss" scoped>
</style>