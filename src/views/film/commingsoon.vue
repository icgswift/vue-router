<template>
  <div>
    <li v-for="data in $store.getters.commingListGetter" :key="data.filmId">
      <img :src="data.poster" />
      <p>{{data.name}}</p>
    </li>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.commingList.length === 0) {
      // 子组件dispatch，触发actions
      this.$store.dispatch("sendAJAX");
      console.log(this.$store.getters.commingListGetter);
    } else {
      console.log("已取得数据");
    }
  }
};
</script>