<template>
    <div>
        <heade class="header index" :prop="index"></heade>
        <particulars class="main"></particulars>
        <Footer class="index footer"></Footer>
    </div>
</template>

<script>
    import particulars from "./module/particulars"
    import Golbal from './module/Golbal.vue'
    import heade from "./module/header"
    import Footer from "./module/Footer"
    export default {
        name: "List02",
        components:{
            particulars,heade,Footer
        },
        data:function(){
            return {
                items:[],
                index:false
            }
        },
        methods:{
            initialize:function () {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get("/api/media/v7/channelondemands",{
                        params: {
                            category_id: 521
                        },
                        headers:data
                    }).then(function (response){
                        vm.items = response.data.data;
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