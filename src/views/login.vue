<template>
<div class="wrap">
  <h1>请选择您所在的城市</h1>
  <v-region @values="regionChange" :area='false'></v-region>
  </div>
</template>

<script>
import { show_tabbar_mutation, hide_tabbar_mutation } from "@/type";

export default {
  methods: {
    regionChange(data) {
      if(data.city){
        let {key,value}=data.city
        switch(key){
          case '110000':
            key=110100
            break
          case '120000':
            key=120100
            break
          case '310000':
            key=310100
            break
          case '500000':
            key=500100
        }
        this.$store.commit('getCityId',key)
        this.$store.commit('setToken',value)
        this.$router.push('/film')
      }
    },
  },

   beforeMount() {
    this.$store.commit(hide_tabbar_mutation);
  },
  beforeDestroy() {
    this.$store.commit(show_tabbar_mutation);
  }
};
</script>

<style lang="scss">
.wrap{
display: flex;
flex-direction: column;
align-items: center;
h1{
  margin: 10vh 0;
}
}

</style>