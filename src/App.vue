<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  body,h2,h3,h4,p,a{margin: 0;padding: 0;}
  ul,li{margin: 0;padding: 0;list-style: none;}
  a{cursor: pointer;}
  #app {font-family: PingFangSC,'Avenir', Helvetica, Arial, sans-serif;width: 100%;max-width: 750px;margin:0 auto;overflow: hidden;}
</style>
