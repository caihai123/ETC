<template>
    <div>
        <heade class="header index" :prop="index"></heade>
        <div class="main">
            <slider :prop="slideshow"></slider>
            <subiject></subiject>
            <Nav></Nav>
            <TuiJian class="man-top" v-for="(list,index) in items" :prop="list" :key="index"></TuiJian>
        </div>
        <Footer class="footer index"></Footer>
    </div>
</template>

<script>
    import heade from "./module/header"
    import Footer from "./module/Footer"
    import slider from "./module/slider"
    import subiject from "./module/subject"
    import Nav from "./module/Nav"
    import TuiJian from "./module/TuiJian"
    export default {
        name: "Index",
        components:{
            heade,slider,subiject,Nav,TuiJian,Footer
        },
        data:function () {
            return {
                index:true,//是否是首页
                slideshow:[//轮播图数据
                    {to:"/playPage?id=102974", src: "./fonts/banner01.png"},
                    {to:"/playPage?id=119326", src: "./fonts/banner02.png"}
                ],
                items:[{name:"小说",id:521},{name:"情感推荐",id:529},{name:"头条",id:545},{name:"儿童",id:1599},
                    {name:"汽车",id:3385},{name:"精品",id:3617},{name:"音乐",id:523},{name:"相声小品",id:527}]
            }
        }
    }
</script>

<style scoped>
    .main{margin: 45px 0;}
    .man-top{margin-top:1.25rem;}
    .index{position: fixed;z-index: 999;}
    .header{top: 0;}
    .footer{bottom: 0;}
</style>