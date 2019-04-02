<template>
    <div class="banner">
        <img :src="prop.thumbs.small_thumb"/>
        <div class="span"><span >{{prop.popularity}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "banner",
        props:["prop"]
    }
</script>

<style scoped>
    .banner{position: relative;box-sizing: border-box;}
    .banner img{width: 100%;height: 9rem;border-radius: 0.5rem;}
    .banner .span{
        width: 100%;
        height: 2rem;
        line-height: 2rem;
        position: absolute;
        padding-left: 2rem;
        bottom:0.3rem;
        background:rgba(0,0,0,0.2);
        background-image: url("../../assets/fonts/icon_a.png");
        background-repeat: no-repeat;
        background-size: 1.5rem;
        background-position:0.2rem 0.3rem;
        color: #fff;
        border-radius: 0 0 0.5rem 0.5rem;
        box-sizing: border-box;
    }
    .banner .span span{display: inline-block;height: 2rem;line-height: 2.5rem;text-shadow:2px 2px 2px #000;font-size: 0.6rem;}
</style>