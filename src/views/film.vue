<template>
  <div>
    film
    <router-view></router-view>
    <ul>
      <router-link to="/film/nowplaying" tag="li" activeClass="myactive">正在热映</router-link>
      <router-link to="/film/commingsoon" tag="li" activeClass="myactive">即将上映</router-link>
    </ul>
  </div>
</template>    