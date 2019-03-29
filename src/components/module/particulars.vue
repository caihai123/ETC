<template>
    <div class="particulars">
        <slider :prop="prop.slideshow"></slider>
        <div class="nav">
            <div class="box1">
                <a class="active">热门</a>
                <a>最新</a>
            </div>
            <div class="box2">
                <a class="active">全部</a>
                <ul>
                    <li v-for="list of prop.fenlei"><a>{{list.title}}</a></li>
                </ul>
            </div>
        </div>
        <div>
            <list v-for="list in prop.items" :prop="list"></list>
        </div>
    </div>
</template>

<script>
    import slider from './slider'
    import list from "../module/list"
    export default {
        name: "particulars",
        components:{
            slider,list
        },
        props:["prop"]
    }
</script>

<style scoped>
    .nav{color: #6a6a6a;font-size:12px;margin:1rem 0;}
    .active{background: #fd5353;color: #fff;border-radius: 0.3rem;}
    .nav a{float: left;height:1.5rem;padding:0 0.5rem;line-height:1.5rem;margin:0.5rem 0; }
    .box1,.box2{border-bottom: 1px solid #e6e6e6;overflow: hidden;padding:0 1rem;}
    .box2 ul{overflow: hidden;float: left;width: calc(100% - 3rem)}
    .box2 li{float: left;}
</style>