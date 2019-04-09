<template>
    <div>
        <heade class="header index" :prop="index" name="音乐"></heade>
        <particulars class="main" :prop="datas"></particulars>
        <Footer class="index footer"></Footer>
    </div>
</template>

<script>
    import particulars from "./module/particulars"
    import heade from "./module/header"
    import Footer from "./module/Footer"
    import Golbal from './module/Golbal.vue'
    export default {
        name: "music",
        components:{
            heade,Footer,particulars
        },
        data:function () {
            return {
                index:false, //是否是首页
                datas:{//小说的所有数据
                    slideshow:[//轮播图数据
                        {to:"", src: "./fonts/banner01.png"},
                        {to:"", src: "./fonts/banner02.png"}
                    ],
                    fenlei:[
                        {title:"新歌抢鲜听",id:""},
                        {title:"怀旧经典",id:""},
                        {title:"热门必听",id:""},
                        {title:"原创寻光",id:""},
                        {title:"情感治愈",id:""},
                        {title:"睡前必听",id:""},
                        {title:"国家大剧院",id:""},
                        {title:"古典精品",id:""}
                    ],
                    items:[]
                }
            }
        },
        methods:{
            initialize:function () {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get("/api/media/v7/channelondemands",{
                        params: {
                            category_id: 523
                        },
                        headers:data
                    }).then(function (response){
                        vm.datas.items = response.data.data;
                    })
                });
            }
        },
        mounted:function () {
            this.initialize();
        }
    }
</script>

<style scoped>
    .main{margin: 45px 0;}
    .index{position: fixed;z-index: 999;}
    .header{top: 0;}
    .footer{bottom: 0;}
</style>