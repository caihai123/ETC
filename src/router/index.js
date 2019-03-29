import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index"
import List01 from "../components/List01"
import List02 from "../components/List02"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:"/", component:Index,children: [
            {
            path:"/",component: List01,
                meta:{
                    title:"首页",
                    index:1
            }
        },{
            path:"/list02",component: List02,
                meta:{
                    title:"小说",
                    index:2
                }
        }
        ]
    }]
})