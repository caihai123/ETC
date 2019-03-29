<template>
    <div class="particulars">
        <Swiper v-if="someList.length > 0">
            <Slide v-for="(list,index) in someList" :key="index" :style="list.style" class="slider"></Slide>
        </Swiper>
        <div class="nav">
            <div class="box1">
                <a class="active">热门</a>
                <a>最新</a>
            </div>
            <div class="box2">
                <a class="active">全部</a>
                <ul>
                    <li><a>穿越架空</a></li>
                    <li><a>青春校园</a></li>
                    <li><a>武侠仙侠</a></li>
                    <li><a>广播剧</a></li>
                    <li><a>推理刑侦</a></li>
                    <li><a>悬疑探险</a></li>
                    <li><a>惊悚异能</a></li>
                    <li><a>玄幻超能</a></li>
                    <li><a>古风言情</a></li>
                    <li><a>现代言情</a></li>
                    <li><a>现代都市</a></li>
                    <li><a>官商职场</a></li>
                    <li><a>历史军事</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {Swiper, Slide} from 'vue-swiper-component'
    export default {
        name: "particulars",
        components:{
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
    .nav{color: #6a6a6a;font-size:12px;margin:1rem 0; }
    .active{background: #fd5353;color: #fff;border-radius: 0.3rem;}
    .nav a{float: left;height:1.5rem;padding:0 0.5rem;line-height:1.5rem;margin:0.5rem 0; }
    .box1,.box2{border-bottom: 1px solid #e6e6e6;overflow: hidden;padding:0 1rem;}
    .box2 ul{overflow: hidden;float: left;width: calc(100% - 3rem)}
    .box2 li{float: left;}
</style>