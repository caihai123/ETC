<template>
    <div>
        <div class="nav">
            <span>共109集</span>
            <a>选集</a>
        </div>
        <div class="list" v-for="(list,index) in item">
            <span class="num">第{{index+1}}集</span>
            <span class="title">{{list.title}}</span>
            <i class="duration">16:06</i>
            <!--<i class="ci-shu">2637次</i>-->
            <i class="time">{{list.update_time}}</i>
            <a class="paly"></a>
            <a class="dow"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "jie-mu",
        props:["item"]
    }
</script>

<style scoped>
    .nav{height:2.5rem;background:#f3f3f3;padding:0 2.5rem;border-bottom: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6;display: flex;justify-content:space-between;}
    .nav span{line-height: 2.5rem;color: #999999;}
    .nav a{line-height: 2.5rem;padding-left: 2rem;color: #717171;background-image: url("../../assets/fonts/icon_xj.png");background-repeat: no-repeat;background-size: 1.5rem;background-position:0 center;}

    .list{height: 3rem;padding:0 1.25rem;border-bottom: 1px solid #e6e6e6;overflow: hidden;}
    .list span,.list i{display: inline-block;line-height: 3rem;float: left;overflow: hidden;}
    .list span{font-size: 1rem;color: #666666;}
    .list i{font-size: 0.75rem;font-style:normal;padding-left: 1rem;color: #a3a3a3;background-position:0 1rem;background-repeat: no-repeat;background-size:0.8rem;margin-left:0.5rem;}
    .list .title{width:25%;}
    .list .num{width:16%;margin-left:2%;}
    .list .duration{width:10%;background-image: url("../../assets/fonts/icon_duration.png");}
    .list .ci-shu{background-image: url("../../assets/fonts/icon_ci_shu.png");}
    .list .time{width:20%;height: 3rem;background-image: url("../../assets/fonts/icon_time.png");}
    .list a{display: inline-block;width:8%;line-height: 2rem;height: 2rem;float: left;;background-position:center;background-repeat: no-repeat;background-size:1.5rem;padding:0.5rem 0;}
    .list .paly{background-image: url("../../assets/fonts/icon_sp1.png");}
    .list .dow{background-image: url("../../assets/fonts/icon_dow.png");}
</style>