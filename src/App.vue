<template>
  <div>
    <p>hello world</p>
    <input type="text" ref="test" />
    <button @click="test()">click me</button>
    <ul>
      <li v-for="(data,index) in list" :key="index">{{data}}</li>
    </ul>
    <navbar>
      <button @click="test1()">切换</button>
    </navbar>
    <sidebar v-show="msg"></sidebar>

    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 引入import要在script标签中
import Navbar from "./components/navbar.vue";
import Sidebar from "./components/sidebar.vue";
import axios from "axios";
export default {
  data() {
    return {
      list: ["111", "222", "333"],
      msg: true
    };
  },
  methods: {
    test() {
      this.list.push(this.$refs.test.value);
      this.$refs.test.value = "";
    },
    test1() {
      this.msg = !this.msg;
    }
  },
  // 局部注册
  components: {
    navbar: Navbar,
    sidebar: Sidebar
  },
  mounted() {
    axios
      .get(
        "/ajax/mostExpected?ci=57&limit=10&offset=0&token=&optimus_uuid=93ACCAC08F7211EAA50A03EEE54A5BB49CCC00E7B65C432F812FF09D2EF176CD&optimus_risk_level=71&optimus_code=10"
      )
      .then(res => {
        console.log(res.data);
      });
  }
};
</script>

// scoped   指定css作用域，局限在当前文件
<style lang='scss' scoped>
ul {
  list-style: none;
  li {
    background-color: aqua;
  }
}
</style>