<template>
    <div class="style01" @click="playPage">
        <banner :prop="prop"></banner>
        <h4>{{prop.title}}</h4>
        <p>{{prop.description}}</p>
    </div>
</template>

<script>
    import banner from "./banner"
    export default {
        name: "style01",
        components:{
            banner
        },
        props:["prop"],
        methods:{
            playPage:function () {

                this.$router.push({
                    name:"playPage",
                    query:{
                        id:this.prop.id
                    }
                });
            }
        }
    }
</script>

<style scoped>
    h4{font-size: 1rem;font-weight: 400;color: #333333;overflow: hidden;text-overflow:ellipsis;white-space:nowrap;}
    p{font-size: 0.75rem;color: #666666;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp:2;-webkit-box-orient: vertical;}
</style>