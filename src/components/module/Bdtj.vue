<template>
    <div class="bdtj">
        <headline :prop="headline" v-on:InABatch="InABatch()"></headline>
        <style02 class="main" v-for="item of items.slice(fragment.Start,fragment.end)" :key="item.id" :prop="item"></style02>
    </div>
</template>

<script>
    import headline from "./headline"
    import style02 from "./style02"
    import Golbal from './Golbal.vue'
    export default {
        name: "Bdtj",
        components:{
            headline,style02
        },
        data:function () {
            return {
                headline:{title:"情感推荐",list:["免费经典榜","会员畅听榜","人气飙升榜"]},
                items:[],
                fragment:{
                    Start:0,
                    end:3
                }
            }
        },
        mounted:function () {
            this.initialize();
        },
        methods:{
            initialize:function () {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get("/api/media/v7/channelondemands",{
                        params: {
                            category_id: 529
                        },
                        headers:data
                    }).then(function (response){
                        vm.items = response.data.data;
                    })
                });
            },
            InABatch:function () {
                this.fragment.Start += 3;
                if(this.fragment.Start>=this.items.length){
                    this.fragment.Start = 0;
                }
                this.fragment.end = this.fragment.Start + 3;
            }
        }
    }
</script>

<style scoped>
    .bdtj{padding:0 1.25rem;background: #fff;vertical-align:bottom;}
    .main{margin-bottom:1rem;}
</style>