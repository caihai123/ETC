<template>
    <div class="menu">
        <div class="header">
            <a class="goBack" v-on:click="menu"></a>
            <h2>所有分类</h2>
        </div>
        <div class="main">
            <h3>选择你感兴趣的类别，开始畅听享受吧~</h3>
            <div>
                <table cellspacing="0">
                    <tr>
                        <td rowspan="2"><a class="tuijian">推荐</a></td>
                        <td><a>小说</a></td>
                        <td><a>出版精品</a></td>
                        <td><a>电台</a></td>
                    </tr>
                    <tr>
                        <td><a>相声小品</a></td>
                        <td><a>头条</a></td>
                        <td><a>情感</a></td>
                    </tr>
                    <tr>
                        <td><a>精选电台</a></td>
                        <td><a>儿童</a></td>
                        <td><a>文化</a></td>
                        <td><a>戏曲</a></td>
                    </tr>
                    <tr>
                        <td><a>音乐</a></td>
                        <td><a>脱口秀</a></td>
                        <td><a>公开课</a></td>
                        <td><a>外语</a></td>
                    </tr>
                    <tr>
                        <td><a>财经</a></td>
                        <td><a>汽车</a></td>
                        <td><a>搞笑</a></td>
                        <td><a>影视</a></td>
                    </tr>
                    <tr>
                        <td><a>体育</a></td>
                        <td><a>科技</a></td>
                        <td><a>健康</a></td>
                        <td><a>时尚</a></td>
                    </tr>
                    <tr>
                        <td><a>女性</a></td>
                        <td><a>娱乐</a></td>
                        <td><a>广播剧</a></td>
                        <td><a>品牌电台</a></td>
                    </tr>
                    <tr>
                        <td><a>中国之声</a></td>
                        <td><a>游戏动漫</a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "menus",
        methods:{
            menu: function(){
                this.$emit("menu");
            }
        }
    }
</script>

<style scoped>
    .menu{width: 100%;max-width: 750px;height:100%;background: #fff;text-align: center;}
    .menu .header{width: 100%;height: 45px;padding:0 0.41667rem;box-sizing: border-box;background: #ea4740;}
    .menu .header .goBack{height:100%;width:45px;float: left;background-repeat: no-repeat;background-position: center;background-size: 25px;background-image: url("../../assets/fonts/ment_font.png")}
    .menu .header h2{line-height: 45px;color: #fff;font-size: 18px;padding:0 45px;font-weight: 400;}
    .main{padding:0 1.25rem;}
    .main h3{height: 4rem;line-height: 4rem;color:#676767;font-size: 1.2rem;font-weight: 400;}
    .main table{width: 100%;border-collapse: collapse;}
    .main table td{width: 25%;height:3.5rem;border:1px solid #d6e0e5;}
    .main table td a{display: inline-block;width: 100%;line-height:3.5rem;font-size: 1rem;}
    .main table td .tuijian {height: 7rem;line-height: 12rem;background: url("../../assets/fonts/list5.png") no-repeat;background-size: 4rem;background-position:center 1rem;}

</style>