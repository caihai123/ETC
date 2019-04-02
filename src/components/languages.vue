<template>
    <div>
        <heade class="header index" :prop="index" name="外语"></heade>
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
        name: "languages",
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
                        {title:"小编力荐",id:""},
                        {title:"实用口语",id:""},
                        {title:"英语脱口秀",id:""},
                        {title:"经典教材",id:""},
                        {title:"名人演讲",id:""},
                        {title:"有声美文",id:""},
                        {title:"儿童英语",id:""},
                        {title:"慢速英语",id:""},
                        {title:"日韩专区",id:""},
                        {title:"小语种",id:""},
                        {title:"名著原文",id:""}
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
                            category_id: 543
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