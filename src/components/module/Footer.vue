<template>
    <div class="footer">
        <div class="nav">
            <div><router-link to="/"><img src="../../assets/fonts/icon04.jpg"/><span>首页</span></router-link></div>
            <div><router-link to="/enshrine"><img src="../../assets/fonts/icon02.jpg"/><span>收藏</span></router-link></div>
            <div id="primary"><a><img src="../../assets/fonts/icon_img.png"/></a></div>
            <div><a @click="menu=true"><img src="../../assets/fonts/icon03.jpg"/><span>分类</span></a></div>
            <div><a><img src="../../assets/fonts/icon01.jpg"/><span>我的</span></a></div>
        </div>
        <transition name="fade">
            <menus v-show="menu" class="menu" v-on:menu="getback()"></menus>
        </transition>
    </div>
</template>

<script>
    import menus from "./menu"
    export default {
        name: "Footer",
        components:{
            menus
        },
        data:function () {
            return {
                menu:false
            }
        },
        methods:{
            getback:function () {
                this.menu = false;
            }
        }
    }
</script>

<style scoped>
    .footer{width: 100%;max-width: 750px;background: #fd5050;font-size: 12px;}
    .nav{width: 100%;height: 45px;display: flex;}
    .footer .nav>div{width: 20%;text-align: center;padding:2px 0.5rem;}
    .footer .nav>div a{display: inline-block;height:41px;width: 100%;}
    .footer .nav>div a img{width:25px;}
    .footer .nav>div a span{display: inline-block;position: relative;top: -2px;width: 100%;color: #fff;}
    .footer #primary a{height: 60px;}
    .footer #primary a img{width: 60px;}
    .footer #primary{position:relative;top: -23px;}
    .menu{position: fixed;top: 0;}
    .fade-enter-active {animation: bounce-in .8s;}
    .fade-leave-active {animation: bounce-in .8s reverse;}
    @keyframes bounce-in {
        0% {top: 80px;opacity:0;}
        100% {top: 0px;opacity:1;}
    }
</style>