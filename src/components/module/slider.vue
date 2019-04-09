<template>
    <Swiper v-if="prop.length > 0">
        <Slide v-for="(list,index) in prop" :key="index" class="slider">
            <router-link :to="list.to"><img :src="list.src"/></router-link>
        </Slide>
    </Swiper>
</template>

<script>
    import {Swiper, Slide} from 'vue-swiper-component'
    export default {
        components: {
            Swiper,Slide
        },
        props:["prop"]
    }
</script>

<style scoped>
    .slider{width:100%;height: 12rem;padding:0 1.25rem;box-sizing: border-box;}
    .slider a{display: inline-block;width: 100%;height: 100%;}
    .slider a img{width: 100%;height: 100%;}
</style>