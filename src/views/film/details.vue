<template>
  <div>details</div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route, this.$router); //$router,全称VueRouter（路由器：包含所有路由的容器） 和$route(路由：描述当前路径的对象)
    console.log("根据传递进来的ID展示不同的信息", this.$route.params.id);
  }
};
</script>