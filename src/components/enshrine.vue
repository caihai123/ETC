<template>
    <div>
        <div class="header">
            <a class="goBack" @click="retreat"></a>
            <h2>我的收藏</h2>
        </div>
        <div class="main">
            <div class="roof">
                <span class="ens">收藏专辑<i>({{items.length}}张)</i></span>
                <span class="che">全选</span>
            </div>
            <div style="margin-top: 4rem;">
                <div class="list" v-for="(item,index) in items" :key="index">
                    <div class="index"><i>{{index+1}}</i></div>
                    <div class="img"><img :src="item.thumbs.small_thumb"/></div>
                    <div class="text">
                        <h2>{{item.title}}<span>{{item.categories[0].name}}专辑</span></h2>

                        <p>播音：{{item.podcasters[0].nickname}}</p>
                    </div>
                    <div class="play"><a></a></div>
                    <div class="delete"><a></a></div>
                </div>
            </div>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
    import Footer from "../components/module/Footer"
    import Golbal from './module/Golbal.vue'
    export default {
        name: "enshrine",
        components:{
            Footer
        },
        data:function () {
            return {
                items:[]
            }
        },
        methods:{
            retreat:function () {
                this.$router.go(-1);
            },
            initialize:function () {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get("/api/media/v7/channelondemands",{
                        params: {
                            category_id: 3385
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
    i{font-style:normal;}
    .main{margin:45px 0;overflow: hidden;}
    .header{width: 100%;height: 45px;padding:0 0.41667rem;box-sizing: border-box;background: #ea4740;text-align: center;position: fixed;top:0;}
    .header .goBack{height:100%;width:45px;float: left;background-repeat: no-repeat;background-position: center;background-size: 25px;background-image: url("../assets/fonts/ment_font.png")}
    .header h2{line-height: 45px;color: #fff;font-size: 18px;padding:0 45px;font-weight: 400;}
    .footer{position: fixed;bottom: 0;}
    .roof{width: 100%;padding:0 1.25rem;height:4rem;border-bottom: 1px solid #e6e6e6;padding-top:1.5rem;box-sizing: border-box;position: fixed;top: 45px;background: #fff;}
    .ens{float: left;line-height: 2.5rem;font-size: 1.25rem;color: #3b3b3b;}
    .ens:before{display: inline-block;content:"";width: 0.25rem;height:1rem;background: #f40;position: relative;top: 0.15rem;margin-right: 0.5rem;}
    .ens i{font-size: 0.8rem;}
    .che{float: right;padding-right:1.5rem;line-height: 2.5rem;background-image: url("../assets/fonts/icon_che.png");background-repeat: no-repeat;background-position:right center;background-size: 1rem;}
    .list{width: 100%;display: flex;height:5rem;border-bottom: 1px solid #e6e6e6;}
    .list .index{width:10%;text-align: center;line-height:6rem;font-size: 1.5rem;color: #b3b3b3;}
    .list .img{width:15%;}
    .list .img img{width:90%;margin:0.4rem 0;border-radius: 0.4rem;}
    .list .text{width:55%;box-sizing: border-box;padding:0.5rem 0 0.5rem 1rem;}
    .list .text h2{height:2rem;line-height:2rem;font-size: 1.2rem;color: #3b3b3b;}
    .list .text h2 span{background: #ec4842;line-height: 2rem;color: #fff;font-size:0.7rem;padding:0.15rem 0.25rem;margin-left:0.2rem;border-radius: 0.3rem;}
    .list .text p{height: 2rem;line-height: 2rem;font-size: 1rem;color: #b3b3b3;}
    .list .play{width: 10%;padding:1rem 0;background-image: url("../assets/fonts/icon_sp1.png");background-repeat: no-repeat;background-position: center;background-size:1.5rem;border-right:1px solid #e6e6e6;}
    .list .delete{width: 10%;background-image: url("../assets/fonts/icon_del.png");background-repeat: no-repeat;background-position: center;background-size: 1.2rem;}
</style>