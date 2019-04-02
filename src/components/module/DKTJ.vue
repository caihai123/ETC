<template>
    <div class="dktj">
        <headline :prop="headline" v-on:InABatch="InABatch()"></headline>
        <style02 class="main" v-for="item of items.slice(fragment.Start,fragment.end)" :key="item.id" :prop="item"></style02>
    </div>
</template>

<script>
    import headline from "./headline"
    import style02 from "./style02"
    import Golbal from './Golbal.vue'
    export default {
        name: "DKTJ",
        components:{
            headline,style02
        },
        data:function () {
            return {
                headline:{title:"热门小说",list:["搞笑","娱乐","历史","情感"]},
                items:[],
                fragment:{
                    Start:0,
                    end:3
                }
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
            },
            InABatch:function () {
                this.fragment.Start += 3;
                if(this.fragment.Start>=this.items.length){
                    this.fragment.Start = 0;
                }
                this.fragment.end = this.fragment.Start + 3;
            }
        },
        mounted:function () {
            this.initialize();
        }
    }
</script>

<style scoped>
    .dktj{padding:0 1.25rem;background: #fff;vertical-align:bottom;}
    .main{margin-bottom:1rem;}
</style>