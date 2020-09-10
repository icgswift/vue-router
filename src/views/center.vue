<!--
    用户登录的相关知识点
    手机验证：获取手机号 -- 后台发送验证码--用户填写验证码后点击按钮--将手机号和验证码发送给后台比对--后台返回比对结果

    后续思路：对比正确 返回一个包含 用户标识 的用户信息集合(保存到store) 用户收藏/添加购物车...都保存在该集合中 设计用户信息的页面展示从该集合中读取数据
    -->
<template>
  <div>
    <p>WELCOME</p>
    <button @click="login">立即登录</button>
  </div>
</template>   

<script>
export default {
  data() {
    return {};
  },
  /*   beforeCreate() {
    if (!this.$store.state.username) {
      this.$router.push('/login');
    }
  }, */
  methods: {
    login() {
      this.$router.push("/login");
    },
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
button {
  margin-top: 10vh;
  width: 100vw;
  background-color: yellow;
  height: 10vh;
  border: 0;
  font-size: x-large;
}
</style> 