<template>
    <div v-if="datas!=null">
        <heade class="header index" :prop="index" :name="datas.categories[0].name"></heade>
        <div class="main">
            <div class="title">
                <div class="ban">
                    <img :src="datas.thumbs.small_thumb"/>
                    <span>{{datas.popularity}}人在听</span>
                </div>
                <div class="tex">
                    <h4>{{datas.title}}</h4>
                    <strong v-if="datas.podcasters">播音：{{datas.podcasters[0].nickname}}</strong>
                    <p>{{datas.description}}</p>
                </div>
                <rater :score="datas.star/2" :disabled="true" class="rate"/>
                <div class="ioin_us">
                    <a>加入听单</a>
                    <i>来自蜻蜓fm</i>
                </div>
            </div>
            <div class="play">
                <meter value="3" min="0" max="10"></meter>
                <div class="menu">
                    <a class="play_a1 play_a"></a>
                    <a class="play_a2"></a>
                    <a class="play_a3 play_a"></a>
                </div>
            </div>
            <div class="tbs">
                <div class="active">
                    <a :class="{act:tbs}" @click="tbs=true">播放列表</a>
                    <a :class="{act:!tbs}" @click="tbs=false">相关推荐</a>
                </div>
                <jiemu v-if="tbs" :id="id" :int="int"></jiemu>
                <tuijian v-if="!tbs" :prop="userid"></tuijian>
            </div>
        </div>
        <Footer class="index footer"></Footer>
    </div>
</template>

<script>
    import heade from "./module/header"
    import Footer from "./module/Footer"
    import Golbal from './module/Golbal.vue'
    import rater from "./module/rater"
    import tuijian from  "./module/play-tuijian"
    import jiemu from "./module/jie-mu"
    export default {
        name: "play-page",
        components:{
            heade,Footer,rater,tuijian,jiemu
        },
        data:function () {
            return {
                index:false,//是否是首页
                tbs:true,
                datas:null,//专辑id
                id:this.$route.query.id,
            }
        },
        methods:{
            initialize:function (id) {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get(`/api/media/v7/channelondemands/${id}`,{
                        headers:data
                    }).then(function (response){
                        vm.datas = response.data.data;
                    })
                });
            }
        },
        mounted:function () {
            this.initialize(this.id);
        },
        watch: {
            '$route' (to, from) {
                this.initialize(to.query.id);
                this.id = to.query.id;
                this.tbs = true;
            }
        },
        computed:{
            userid:function () {
                return this.datas.categories[0].id
            },
            int:function () {
                return this.datas.program_count
            }
        }
    }
</script>

<style scoped>
    .main{margin: 45px 0;background: #f5f5f8;overflow: hidden;}
    .index{position: fixed;z-index: 999;}
    .header{top: 0;}
    .footer{bottom: 0;}
    .main .title{padding:2.5rem 1.25rem 1rem 1.25rem;overflow: hidden;position: relative;background: #fff;}
    .main .ban{width: 33%;float: left;}
    .main .ban img{width: 100%;border-radius: 0.5rem;}
    .main .ban span{height: 2.5rem;line-height: 2.5rem;padding-left: 1.5rem;font-size: 1rem;color: #afafaf;background-image: url("../assets/fonts/icon_b.png");
        background-repeat: no-repeat;background-size: 1rem;}
    .main .tex{width: 67%;padding-left: 1rem;box-sizing: border-box;float: right;}
    .main .tex h4{font-size: 1.25rem;color: #333333;}
    .main .tex strong{height: 2rem;line-height:2rem;font-size: 1rem;color: #a8a8a8;font-weight: 400;}
    .main .tex p{font-size: 1rem;color: #666666;word-break:break-all;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden;}
    .main .rate{position: absolute;top: 1rem;right: 1.25rem;}
    .main .ioin_us{width: 7rem;position: absolute;right: 1.25rem;bottom: 0rem;text-align: center;}
    .main .ioin_us a{display: inline-block;width: 100%;height: 2rem;line-height:2.2rem;background-color:#f8504d;color: #fff;border-radius: 1rem;padding-left: 1.4rem;
        box-sizing: border-box;font-size: 1rem;background-image: url("../assets/fonts/icon_ioin.png");background-size: 1.25rem;background-repeat: no-repeat;background-position:0.7rem 0.5rem;}
    .main .ioin_us i{color: #a8a8a8;font-style:normal;}

    .main .play{margin-bottom:1rem;background: #fff;overflow: hidden;}
    .main .play meter{width: 100%;height:0.3rem;}
    .main .play .menu{display: flex;justify-content:center;margin:1rem 0;}
    .main .play .menu a{display: inline-block;background-repeat: no-repeat;background-position: center;}
    .main .play .menu .play_a{width: 2rem;height: 4.5rem;background-size: 1.5rem;padding:0 1rem;}
    .main .play .menu .play_a1{background-image:url("../assets/fonts/prev.png");}
    .main .play .menu .play_a2{width:4.5rem;height:4.5rem;margin:0 2.5rem;background-image: url("../assets/fonts/play.png");background-size:4rem;}
    .main .play .menu .play_a3{background-image: url("../assets/fonts/next.png")}

    .tbs{background: #fff;}
    .tbs .active{padding:0 2rem;background: #fff;}
    .tbs .active a{display: inline-block;width: 50%;height:3rem;line-height:3rem;text-align: center;font-size: 1.25rem;color: #a8a8a8;position: relative;}
    .tbs .active .act{color:#333333;}
    .tbs .active .act:after{content:"";display: inline-block;width:4rem;height: 4px;position: absolute;bottom: 0;left:50%;background: #e9473f;margin-left:-2rem;border-radius:2px;}
</style>