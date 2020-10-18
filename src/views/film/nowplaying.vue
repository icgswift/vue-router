<!--
    相关知识点
    取得数据数组里仍然存在数组  data.actors
    解决：继续使用v-for指令遍历
    缺陷：添加了DOM结构，影响解析效率

   问题：通过ref或document获取到的元素节点无法再进一步获取子元素.lastElement(但能获取到.children)
-->

<template>
  <div id="npwrap" ref="npwrap">
    <li v-for="(data,index) in list" :key="index" class="filmPlayingOne">
      <img :src="data.poster" />
      <section>
        <p>
          {{data.name}}
          <span
            style="background-color:#d2d6dc; border-radius: 5%;"
          >{{data.filmType.name}}
          </span>
        </p>
        <span style="display:block;height:1rem;"></span>
        <p :style="data.grade?'display:block':'display:none;'">
          观众评分
          <span style="color:orange;">{{data.grade}}</span>
        </p>
        <p id="actors">
          主演：
          <!-- 遍历主演数组 缺点：添加了DOM结构-->
          <span v-for="(item,index) in data.actors" :key="index">{{item.name}}&nbsp;</span>
        </p>
      </section>
      <button @click="handleClick(data.filmId)">查看</button>
    </li>
  </div>
</template>

<script>
import axios from "axios";

import { Indicator,Toast } from "mint-ui";
import { mapState } from 'vuex';

export default {
  data() {
    return {
      list: [],
      pageNum: 2,
    };
  },
  computed:{
   ...mapState(['cityId'])
  },
  methods: {
    handleClick(id) {
      Toast({
        message: "操作成功",
        iconClass: "icon iconfont icon-success",
      });

      this.$router.push({
        name: "details",//命名路由
        params: { id },
      });
    },

    expand() {
      axios({
        url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=${this.pageNum}&pageSize=10&type=1&k=5491072`,
        method: "get",
        headers: {
          "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }).then((res) => {
        res.data.data.films.forEach((film) => {
          this.list.push(film);
        });
        this.pageNum++;
      });
    },
  },

  mounted() {
    Indicator.open({
      text: "请稍等",
    });
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=5491072`,
      method: "get",
      headers: {
        "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      this.list = res.data.data.films;
      Indicator.close();
    });

    /*  const observer = new IntersectionObserver((entries) => {}, {
      root: this.$refs.npwrap,
      rootMargin: "0px 0px 0px 0px",
    });
    observer.observe(this.$refs.npwrap.lastElementChild); */
  },

  // mounted钩子函数操作修改data触发(when data changes)
  updated() {
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
.filmPlayingOne {
  padding: 1vh 4vw 1vh 2vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ededed;
  img {
    width: 20vw;
  }
  button {
    color: #ff5f16;
    background-color: white;
    border-radius: 4px;
    border: 1px #ff5f16 solid;
    line-height: 1.5rem;
    width: 4.5rem;
  }
  section {
    flex-basis: 50vw;
    padding: 0 2vw;
    #actors {
      width: 50vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
//使用伪元素防止固定定位遮挡内容
#npwrap::after {
  content: "";
  width: 100%;
  height: 50px;
  display: block;
}
</style>