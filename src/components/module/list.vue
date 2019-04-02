<template>
    <div class="list" @click="playPage">
        <div class="ban">
            <img :src="prop.thumbs.small_thumb"/>
        </div>
        <div class="tex">
            <h4>{{prop.title}}</h4>
            <p>{{prop.description}}</p>
            <strong v-if="prop.podcasters.length">播音：{{prop.podcasters[0].nickname}}</strong>
            <div class="sec">
                <span class="sp1">{{prop.popularity}}次</span>
                <span class="sp2">{{prop.program_count}}集</span>
                <rater :score="prop.star/2" :disabled="true" class="rate"/>
            </div>
        </div>
    </div>
</template>

<script>
import rater from "./rater"
    export default {
        name: "list",
        props:["prop"],
        components:{
            rater
        },
        methods:{
            playPage:function () {
                this.$router.push({
                    name:"playPage",
                    params:{
                        data:this.prop
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .list{display: flex;justify-content:space-between;padding: 0 1.25rem;margin-top:1rem;}
    .ban{width: 30%;}
    .ban img{width: 100%;border-radius: 0.5rem;}
    .tex{width: 70%;padding:0 1rem;box-sizing: border-box;}
    .tex h4{line-height: 2rem;font-size: 1rem;color:#333333;}
    .tex p{height: 3rem;line-height: 1.5rem;font-size: 0.8rem;color: #666666;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;}
    .tex strong{line-height: 1.5rem;font-size: 0.8rem;font-weight: 400;color: #a8a8a8;}
    .sec{font-size: 0.8rem;color: #8d8d8d;}
    .sec span{display: inline-block;height:1.5rem;line-height: 1.7rem;padding-left: 1.5rem;background-size: 1.2rem;margin-right: 1rem;background-repeat: no-repeat;background-position:0 center;}
    .sp1{background-image: url("../../assets/fonts/icon_sp1.png");}
    .sp2{background-image: url("../../assets/fonts/icon_sp2.png");}
    .rate{display: inline-block;float: right;margin-top: 0.25rem;}
</style>