<template>
    <div class="tabs">
        <ul>
            <li><a class="active">推荐</a></li>
            <li><a>书单</a></li>
            <li><a>电台</a></li>
            <li><a class="member">会员独享</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Tabs"
    }
</script>

<style scoped>
    .tabs{padding:0.6rem 1.25rem;box-sizing: border-box;}
    .tabs li{display: inline-block;}
    .tabs li a{display: inline-block;height:1.666666rem;line-height: 1.666666rem;font-size: 1.083333rem;margin:0 0.8rem;padding:0 0.7rem;}
    .tabs li .active{font-size: 1.333333rem;}
    .tabs li .member{background: #fd5050;color: #fff;border-radius:0.8rem;}
    .active:after {
        content: "";
        display: block;
        width:2.7rem;
        height: 0.208333rem;
        background: #fd5050;
        border-radius: 0.1rem;
    }
</style>