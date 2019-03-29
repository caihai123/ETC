<template>
    <div class="style02">
        <banner class="banne" :prop="prop"></banner>
        <div class="tex">
            <h4>{{prop.title}}</h4>
            <p>{{prop.description}}</p>
            <div class="spa">
                <a>专辑</a>
                <span>{{prop.program_count}}集</span>
            </div>
        </div>
    </div>
</template>

<script>
    import banner from "./banner"
    export default {
        name: "style02",
        props:["prop"],
        components:{
            banner
        }
    }
</script>

<style scoped>
    .style02{display: flex;justify-content:space-between;}
    .banne{width: 33%;}
    .style02 .tex{width: 66%;padding:0 1rem;box-sizing: border-box;position: relative;}
    .style02 .tex h4{height:1.8rem;font-size: 1.3rem;color: #333333;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;}
    .style02 .tex p{line-height:1.5rem;font-size: 1rem;color: #666666;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;}
    .style02 .spa{position: absolute;bottom: 0.5rem;}
    .style02 .spa a{display: inline-block;height:1.5rem;width: 3rem;text-align: center;background: #fd5353;line-height:1.5rem;color: #fff;border-radius:0.5rem;margin-right: 1rem;}
    .style02 .spa span{color: #999999;}
</style>