import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index"
import xiaoshuo from "../components/xiaoshuo"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:"/",
        component: Index
    },{
        path:"/xiaoshuo",
        component: xiaoshuo
    }
    ]
})