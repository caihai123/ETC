<template>
    <div>
        <heade class="header index" :prop="index"></heade>
        <div class="main">
            <!--<Tabs></Tabs>-->
            <slider></slider>
            <subiject></subiject>
            <Nav></Nav>
            <TuiJian class="man-top"></TuiJian>
            <FenLei class="man-top"></FenLei>
            <Dktj class="man-top"></Dktj>
            <Jptj class="man-top"></Jptj>
            <Bdtj class="man-top"></Bdtj>
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
                index:true
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