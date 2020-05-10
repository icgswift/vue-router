<template>
  <div>center</div>
</template>   

<script>
const token = {
  isLogin() {
    return false;
  }
};
export default {
  // 组件内的守卫   beforeRouteEnter   beforeRouteUpdate   beforeRouteLeave
  beforeRouterEnter(to, from, next) {
    // console.log(to, from, next)
    if (token.isLogin()) {
      next();
    } else {
      alert("过不去了");
      next("/login");
    }
  }
};
</script> 