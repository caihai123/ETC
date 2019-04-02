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
            <h2><input autofocus="autofocus"/></h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "heade",
        props:["prop","name"],//是否是首页
        data:function f() {
            return {
                title:this.name ? this.name : "小说",
                seek:false//是否出现搜索框
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
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
    .index h2{color: #273034;}

    .getback{float: left;background-image: url("../../assets/fonts/ment_font.png");}

    .header .box{text-align: center;background: #f44d4a;}
    .box .search2{float: right;background-image: url("../../assets/fonts/search02.png")}
    .box h2{padding: 0 45px;color: #fff;}

    .header .seek{background: #f44d4a;}
    .header .seek h2{padding-left: 45px;padding-right: 25px;}
    .header .seek h2 input{width: 100%;outline:none;border: none;border-bottom:1px solid #f48d89;background: #f44d4a;height: 25px;color: #fff;}
</style>