<template>
    <div>
        <heade class="header index" :prop="index"></heade>
        <div class="main">
            <!--<Tabs></Tabs>-->
            <slider :prop="slideshow"></slider>
            <subiject></subiject>
            <Nav></Nav>
            <TuiJian class="man-top" v-for="list in items" :prop="list"></TuiJian>
            <!--<FenLei class="man-top"></FenLei>-->
            <!--<Dktj class="man-top"></Dktj>-->
            <!--<Jptj class="man-top"></Jptj>-->
            <!--<Bdtj class="man-top"></Bdtj>-->
        </div>
        <Footer class="footer index"></Footer>
    </div>
</template>

<script>
    import heade from "./module/header"
    import Footer from "./module/Footer"
    import Tabs from "./module/Tabs"
    import slider from "./module/slider"
    import subiject from "./module/subject"
    import Nav from "./module/Nav"
    import FenLei from "./module/FenLei"
    import TuiJian from "./module/TuiJian"
    import Dktj from "./module/DKTJ"
    import Jptj from "./module/Jptj"
    import Bdtj from "./module/Bdtj"
    export default {
        name: "Index",
        components:{
            heade,Tabs,slider,subiject,Nav,FenLei,TuiJian,Dktj,Jptj,Bdtj,Footer
        },
        data:function () {
            return {
                index:true,//是否是首页
                slideshow:[//轮播图数据
                    {html: 'slide1', style: {'background': '#1bbc9b'}},
                    {html: 'slide2', style: {'background': '#4bbfc3'}},
                    {html: 'slide3', style: {'background': '#7baabe'}},
                    {html: 'slide4', style: {'background': '#a58'}}
                ],
                items:[{name:"精品",id:3617},{name:"小说",id:521},{name:"音乐",id:523},{name:"相声小品",id:527},{name:"情感推荐",id:529},{name:"头条",id:545},{name:"儿童",id:1599},
                    {name:"汽车",id:3385}]
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