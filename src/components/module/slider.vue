<template>
    <div>
        <Swiper v-if="someList.length > 0">
            <Slide v-for="(list,index) in someList" :key="index" :style="list.style" class="slider"></Slide>
        </Swiper>
    </div>
</template>

<script>
    import {Swiper, Slide} from 'vue-swiper-component'
    export default {
        components: {
            Swiper,Slide
        },
        data () {
            return {
                someList:[
                    {html: 'slide1', style: {'background': '#1bbc9b'}},
                    {html: 'slide2', style: {'background': '#4bbfc3'}},
                    {html: 'slide3', style: {'background': '#7baabe'}},
                    {html: 'slide4', style: {'background': '#a58'}}
                    ]
            }
        }
    }
</script>

<style scoped>
    .slider{width:100%;height: 12rem;}
</style>