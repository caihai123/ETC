<template>
    <div class="jptj">
        <headline :prop="headline" v-on:InABatch="InABatch()"></headline>
        <div class="lists">
            <style01 class="list" v-for="item of items.slice(fragment.Start,fragment.end)" :key="item.id" :prop="item"></style01>
        </div>
    </div>
</template>

<script>
    import headline from "./headline"
    import style01 from "./style01"
    import Golbal from './Golbal.vue'
    export default {
        name: "Jptj",
        components:{
            headline,style01
        },
        data:function () {
            return {
                headline:{title:"相声小品"},
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
                            category_id: 527
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
    .jptj{width: 100%;padding:0 1.25rem;background:#fff;box-sizing: border-box;overflow: hidden;}
    .lists{display: flex;justify-content:space-between;margin-bottom:1rem;}
    .list{width: 30%;}
</style>