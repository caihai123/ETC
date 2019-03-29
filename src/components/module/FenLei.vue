<template>
    <div class="fenlei">
        <ul>
            <li><a>热门小说</a></li>
            <li><a>相声评书</a></li>
            <li><a>历史杂谈</a></li>
            <li><a>经典音乐</a></li>
            <li><a>文学精品</a></li>
            <li><a>品牌电台</a></li>
            <li><a>公开课</a></li>
            <li><a>体育娱乐</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FenLei"
    }
</script>

<style scoped>
.fenlei ul{display: flex;flex-wrap:wrap;background: #fff;padding-bottom: 1rem;}
.fenlei ul li{width: 25%;text-align: center;margin-top: 1rem;}
.fenlei ul li a{display: inline-block;height: 2rem;line-height: 2rem;width:6rem;border-radius: 1rem;background:#f5f5f8;font-size: 1rem;color: #454545;}
</style>