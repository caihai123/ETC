<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index;
      const fromDepth = from.meta.index;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
  body,h2,h3,h4,p,a{margin: 0;padding: 0;}
  ul,li{margin: 0;padding: 0;list-style: none;}
  a{cursor: pointer;}
  #app {font-family: PingFangSC,'Avenir', Helvetica, Arial, sans-serif;width: 100%;max-width: 750px;margin:0 auto;overflow: hidden;}
</style>
