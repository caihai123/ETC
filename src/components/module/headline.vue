<template>
    <div class="headline">
        <h3>{{prop.title}}</h3>
        <ul v-if="prop.list">
            <li v-for="list of prop.list"><a>{{list}}</a></li>
        </ul>
        <a v-on:click="InABatch">换一批</a>
    </div>
</template>

<script>
    export default {
        name: "headline",
        props:["prop"],
        methods:{
            InABatch: function(){
                this.$emit("InABatch");
            }
        }
    }
</script>

<style scoped>
    .headline{width: 100%;overflow: hidden;}
    .headline h3{height: 3rem;font-size: 1.333333rem;line-height: 3rem;display: inline-block;float: left;}
    .headline ul{overflow: hidden;display: inline-block;}
    .headline ul li{display: inline-block;height:3rem;line-height:3rem;font-size: 0.75rem;margin-left:1rem;color: #fd5050;}
    .headline>a{float: right;height:3rem;line-height:3rem;font-size: 1rem;color: #999999;}
</style>