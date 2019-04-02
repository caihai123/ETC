<template>
    <div class="nav">
        <div class="list" v-for="list of lists" :key="list.id">
            <a><img :src="list.url"/><span>{{list.name}}</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
            return {
                lists:[{id:"1",name:"收藏",url:"./fonts/list1.png"},
                    {id:"2",name:"精品",url:"./fonts/list2.png"},
                    {id:"3",name:"榜单",url:"./fonts/list3.png"},
                    {id:"4",name:"大咖",url:"./fonts/list4.png"},
                    {id:"5",name:"分类",url:"./fonts/list5.png"}
                    ]
            }
        }
    }
</script>

<style scoped>
.nav{display: flex;height: 6.9166667rem;background: #fff;padding:1rem 1.25rem;box-sizing: border-box;}
.list{width: 20%;text-align: center;}
.list a{display: inline-block;width: 100%;height: 100%;}
.list a img{width: 60%;}
.list span{display: inline-block;width: 100%;font-size: 1rem;color: #333333;}
</style>