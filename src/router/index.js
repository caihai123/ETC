import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index"
import xiaoshuo from "../components/xiaoshuo"
import playPage from "../components/play-page"
import enshrine from "../components/enshrine"
import jingpin from "../components/jingpin"
import xsxp from "../components/xsxp"
import toutiao from "../components/toutiao"
import ertong from "../components/ertong"
import music from "../components/music"
import automobile from "../components/automobile"
import languages from "../components/languages"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:"/",
        meta:{index:0},
        component: Index
    },{
        path:"/xiaoshuo",
        meta:{index:1},
        component: xiaoshuo
    },{
        path:"/jingpin",
        meta:{index:2},
        component: jingpin
    },{
        path:"/xsxp",
        meta:{index:3},
        component: xsxp
    },{
        path:"/toutiao",
        meta:{index:4},
        component: toutiao
    },{
        path:"/ertong",
        meta:{index:5},
        component: ertong
    },{
        path:"/music",
        meta:{index:6},
        component: music
    },{
        path:"/automobile",
        meta:{index:7},
        component: automobile
    },{
        path:"/languages",
        meta:{index:8},
        component: languages
    },{
        path:"/enshrine",
        meta:{index:9},
        component:enshrine
    },{
        path:"/playPage",
        meta:{index:10},
        name:"playPage",
        component:playPage
    }
    ]
})