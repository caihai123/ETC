<template>
    <div>
        <heade class="header index" :prop="index" name="相声小品"></heade>
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
        name: "xsxp",
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
                        {title:"推荐",id:""},
                        {title:"单口",id:""},
                        {title:"对口",id:""},
                        {title:"小品",id:""},
                        {title:"郭德纲",id:""},
                        {title:"德云社",id:""}
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
                            category_id: 527
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