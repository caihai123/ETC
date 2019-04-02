<template>
    <div>
        <list v-for="list in items" :prop="list"></list>
    </div>
</template>

<script>
    import list from "./list"
    import Golbal from "./Golbal"
    export default {
        name: "play-tuijian",
        props:["prop"],
        components:{
            list
        },
        data:function () {
            return {
                items:[]
            }
        },
        methods:{
            initialize:function () {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get("/api/media/v7/channelondemands",{
                        params: {
                            category_id: vm.prop
                        },
                        headers:data
                    }).then(function (response){
                        vm.items = response.data.data;
                    })
                });
            }
        },
        mounted() {
            this.initialize();
        }
    }
</script>

<style scoped>

</style>