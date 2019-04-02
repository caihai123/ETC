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
        component: Index
    },{
        path:"/xiaoshuo",
        component: xiaoshuo
    },{
        path:"/jingpin",
        component: jingpin
    },{
        path:"/xsxp",
        component: xsxp
    },{
        path:"/toutiao",
        component: toutiao
    },{
        path:"/ertong",
        component: ertong
    },{
        path:"/music",
        component: music
    },{
        path:"/automobile",
        component: automobile
    },{
        path:"/languages",
        component: languages
    },{
        path:"/playPage",
        name:"playPage",
        component:playPage
    },{
        path:"/enshrine",
        component:enshrine
    }
    ]
})