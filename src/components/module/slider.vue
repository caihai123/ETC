<template>
    <Swiper v-if="prop.length > 0">
        <Slide v-for="(list,index) in prop" :key="index" :style="list.style" class="slider"></Slide>
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
    .slider{width:100%;height: 12rem;}
</style>