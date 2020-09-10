<template>
  <div class="wrap">
    <p>欢迎登陆</p>
    <form>
      <input type="tel" maxlength="13" placeholder="输入手机号" />
      <button @click="getcode">获取验证码</button>
      <input type="text" placeholder="验证码" />
      <input type="submit" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    getcode() {
      axios({
        url: "https://m.maizuo.com/gateway",
        method: "post",
        // post传递数据
        data: { type: "1", mobile: "18696780545", imgKey: "", imgCode: "" },
        
        headers: {
          "X-Client-Info":
            '{ "a": "3000", "ch": "1002", "v": "1.0.0", "e": "1597916404693701642813441", }',
          "X-Host": "mall.user.sms-code.send",
          "X-Requested-With": "XMLHttpRequest",
          "X-Token": "undefined",
        },
      }).then((msg) => {
        console.log(msg);
      });
    },
  },
};
</script>
<style lang="scss">
.wrap {
  height: 100vh;
  p {
    line-height: 30vh;
    text-align: center;
    font-size: 3rem;
    color: black;
    background-color: pink;
  }
  form {
    position: relative;
    button {
      position: absolute;
      height: 8vh;
      right: 0;
      top: 0;
      border: 0;
      background-color: white;
      margin-right: 1vw;
    }
  }
  input {
    border: 0;
    height: 8vh;
    border-bottom: 1px solid #ededed;
    display: block;
    width: 100%;
    margin-top: 1vh;
    font-size: 1.5rem;
  }
}
input:focus {
  outline: none;
}
</style>