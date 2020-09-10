
<template>
  <div id="cswrap">
    <li v-for="data in $store.getters.commingListGetter" :key="data.filmId" id="filmCommingOne">
      <img :src="data.poster" @click="handleClick(data.filmId)" />
      <section>
        <p>
          {{data.name}}
          <span
            style="background-color:#d2d6dc; border-radius: 5%;"
          >{{data.filmType.name}}</span>
        </p>
        <p>
          观众评分
          <span style="color:orange;">{{data.grade}}</span>
        </p>
        <p id="actors">
          主演：
          <span v-for="(item,index) in data.actors" :key="index">{{item.name}}&nbsp;</span>
        </p>
      </section>
      <button>购票</button>
    </li>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.commingList.length === 0) {
      // 子组件dispatch，触发actions
      this.$store.dispatch("sendAJAX");
    } else {
      console.log("已取得数据");
    }
  },
};
</script>
<style lang="scss" scoped>
#filmCommingOne {
  padding: 1vh 4vw 1vh 2vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ededed;

  img {
    width: 20vw;
  }

  button {
    color: red;
    border: 1px orange solid;
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
#cswrap::after{
content: '';
width: 100%;
height: 50px;
display: block;
}
</style>