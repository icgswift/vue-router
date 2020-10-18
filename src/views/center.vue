<!--
    用户登录的相关知识点
    手机验证：获取手机号 -- 后台发送验证码--用户填写验证码后点击按钮--将手机号和验证码发送给后台比对--后台返回比对结果

    后续思路：对比正确 返回一个包含 用户标识 的用户信息集合(保存到store) 用户收藏/添加购物车...都保存在该集合中 涉及用户信息的页面展示从该集合中读取数据
    -->
<template>
  <div>
    <p>WELCOME</p>
    <h1 v-if="token">{{token}}用户</h1>
    <button @click="login" v-if='token'>切换</button>
    <button @click="login" v-else>立即登录</button>
  </div>
</template>   

<script>
import { show_tabbar_mutation, hide_tabbar_mutation } from "@/type";
import { mapState } from 'vuex';
export default {
  computed:{
      ...mapState(['token'])
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  beforeMount() {
    this.$store.commit(hide_tabbar_mutation);
  },
  beforeDestroy() {
    this.$store.commit(show_tabbar_mutation);
  },
};
</script>

<style scoped>
p {
  height: 30vh;
  background-color: cadetblue;
  text-align: center;
  line-height: 30vh;
  color: black;
  font-size: 1.5rem;
}
h1{
  width: 100vw;
  margin-top: 10vh;
  background-color: #ff5f16;
  text-align: center;
}
button {
  width: 100vw;
  height: 10vh;
  margin-top: 10vh;
  text-align: center;
  font-size: x-large;
  border: 0;
}
</style> 