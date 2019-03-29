<template>
    <div>
        <heade class="header index" :prop="index"></heade>
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
        name: "Index",
        components:{
            heade,Footer,particulars
        },
        data:function () {
            return {
                index:false, //是否是首页
                datas:{//小说的所有数据
                    slideshow:[//轮播图数据
                        {html: 'slide1', style: {'background': '#1bbc9b'}},
                        {html: 'slide2', style: {'background': '#4bbfc3'}},
                        {html: 'slide3', style: {'background': '#7baabe'}},
                        {html: 'slide4', style: {'background': '#a58'}}
                    ],
                    fenlei:[
                        {title:"穿越架空",id:""},
                        {title:"青春校园",id:""},
                        {title:"武侠仙侠",id:""},
                        {title:"广播剧",id:""},
                        {title:"推理刑侦",id:""},
                        {title:"悬疑探险",id:""},
                        {title:"惊悚异能",id:""},
                        {title:"玄幻超能",id:""},
                        {title:"古风言情",id:""},
                        {title:"现代言情",id:""},
                        {title:"现代都市",id:""},
                        {title:"官商职场",id:""},
                        {title:"历史军事",id:""},
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
                            category_id: 3617
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