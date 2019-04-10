<template>
    <div class="header">
        <div class="index" v-if="prop" v-show="!seek">
            <a class="more"></a>
            <a class="search1" @click="seek=true"></a>
            <h2>听书频道</h2>
        </div>
        <div class="box" v-if="!prop" v-show="!seek">
            <a class="getback" @click="back"></a>
            <a class="search2" @click="seek=true"></a>
            <h2>{{title}}</h2>
        </div>
        <div class="seek" v-show="seek">
            <a class="getback" @click="seek=false"></a>
            <h2><input autofocus="autofocus" v-model="value"/></h2>
            <ul v-if="lists.length>0">
                <li v-for="list in lists" :key="list.id"><a @click="select(list.id)">{{list.title}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Golbal from "./Golbal"
    export default {
        name: "heade",
        props:["prop","name"],//是否是首页
        data:function f() {
            return {
                title:this.name ? this.name : "小说",
                seek:false,//是否出现搜索框
                value:"",
                lists:[]
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            select:function (id) {
                this.seek = false;
                this.$router.push({
                    name:"playPage",
                    query:{
                        id:id
                    }
                });
            }
        },
        watch:{
            value:function () {
                let vm = this;
                if(vm.value===""||vm.value===null){
                    vm.lists = [];
                }else{
                    Golbal.gain(vm).then(function (data) {
                        vm.$axios.get("/api/media/v7/search/",{
                            params: {
                                keyword: vm.value,
                                type:"channel_ondemand"
                            },
                            headers:data
                        }).then(function (response){
                            vm.lists = response.data.data;
                        })
                    });
                }
            }
        }
    }
</script>

<style scoped>
    .header{width: 100%;max-width:750px;}
    .header h2{line-height: 45px;font-size: 18px;font-weight: 400;}
    .header a{height:45px;width:45px;background-repeat: no-repeat;background-position: center;background-size: 22px;}

    .header .index{background: #fff;text-align: center;}
    .index .more{float: left;background-image: url("../../assets/fonts/more.png")}
    .index .search1{float: right;background-image: url("../../assets/fonts/search01.png")}
    .index h2{padding:0 45px;color: #273034;}

    .getback{float: left;background-image: url("../../assets/fonts/ment_font.png");}

    .header .box{text-align: center;background: #f44d4a;}
    .box .search2{float: right;background-image: url("../../assets/fonts/search02.png")}
    .box h2{padding: 0 45px;color: #fff;}

    .header .seek{background: #f44d4a;}
    .header .seek h2{padding-left: 45px;padding-right: 25px;}
    .header .seek h2 input{width: 100%;outline:none;border: none;border-bottom:1px solid #f48d89;background: #f44d4a;height: 25px;color: #fff;}
    .header .seek ul{overflow: scroll;background: #fff;width: 60%;padding:0.5rem 0;position: absolute;top:40px;left:10%;border-radius: 0.5rem;max-height: 10rem;}
    .header .seek ul li{line-height:1.5rem;font-size: 0.75rem;color: #b7b7b7;}
    .header .seek ul li a{display: inline-block;width: 100%;height: 1.5rem;padding:0 0.5rem;box-sizing: border-box;}
</style>