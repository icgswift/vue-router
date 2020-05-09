<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in list" :key="data" @click="handleClick(data)">{{data}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["111", "222", "333"]
    };
  },
  methods: {
    handleClick(id) {
      console.log(id, this.$router);

      //编程式导航  对应声明式导航
      //   this.$router.push(`/details/${id}`);

      //命名路由方式
      this.$router.push({
        name: "details",
        params: { id: id }
      });
    }
  }
};
</script>