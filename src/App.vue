<template>
  <div>
    <!-- <tabbar v-if="$store.state.msg"></tabbar> 等价写法(下面使用computed获取)-->

    <tabbar v-if="msg"></tabbar>

    <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";
import { mapState } from "vuex";

export default {
  beforeCreate() {
    const token = this.$store.state.token;
    if (token) {
      console.log("存在token");
    } else {
      console.log("不存在token");
      this.$router.push("/login");
    }
  },

  // 注册组件
  components: {
    tabbar: Tabbar,
  },


  /* computed: {
    msg() {
      return this.$store.state.msg;
    }
  } */

  //  mapState函数  返回一个对象  DOM读取的就是这个对象的方法 这个方法有一个返回值
  // 作用：当一个组件需要获取多个状态的时候使用mapState函数减少我们的工作量，降低代码耦合性
  /*   computed: mapState({
    msg: state => state.msg
  }) */

  // 计算属性的名称与 state 的子节点名称相同时
  // computed: mapState(["msg"])

  //将它与局部计算属性混合使用
  computed: {
    // 使用对象展开运算符将此对象混入到外部对象中
    ...mapState(["msg"]),
  },
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

li {
  list-style: none;
}
</style>