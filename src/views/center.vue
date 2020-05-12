<template>
  <div>
    center
    <ul>
      <li v-for=" (data,index) in list" :key="index">{{data}}</li>
    </ul>
  </div>
</template>   

<script>
const token = {
  isLogin() {
    return false;
  }
};
export default {
  data() {
    return {
      list: ["111", "222"]
    };
  },
  // 组件内的守卫 三个参数有缺失可能会出现问题(  next()is not a function)   beforeRouteEnter   beforeRouteUpdate   beforeRouteLeave
  beforeRouteEnter(from, to, next) {
    console.log("test");
    if (token.isLogin()) {
      next();
    } else {
      next("/login");
    }
  }
};
</script> 