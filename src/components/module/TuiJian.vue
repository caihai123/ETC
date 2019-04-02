<template>
    <div class="tuijian">
        <headline :prop="headline" v-on:InABatch="InABatch()"></headline>
        <div class="lists">
            <style01 v-for="list of items.slice(fragment.Start, fragment.end)" :key="list.id" class="list" :prop="list"></style01>
        </div>
    </div>
</template>
<script>
    import headline from "./headline"
    import style01 from "./style01"
    import Golbal from './Golbal.vue'
    export default {
        name: "TuiJian",
        props:["prop"],
        components:{
            headline,style01
        },
        data:function () {
            return {
                headline:{title:this.prop.name},
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
                            category_id: vm.prop.id
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
    .tuijian{width: 100%;padding:0 1.25rem;background:#fff;box-sizing: border-box;overflow: hidden;}
    .lists{display: flex;justify-content:flex-start;margin-bottom:1rem;flex-wrap:wrap;}
    .list{width: 31%;}
    .list:nth-child(3n+2){margin:0 3.5%;}
</style>