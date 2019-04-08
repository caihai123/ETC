<template>
    <div>
        <div class="nav">
            <span>共{{int}}集</span>
            <a @click="selections=true">选集</a>
            <div class="shade" v-show="selections" @click="selections=false"></div>
            <div class="selections" v-show="selections">
                <h3>选集</h3>
                <div class="links">
                    <a v-for="(list,index) in number" :key="index" @click="initialize(index+1);selections=false;" v-bind:class="{active: index+1==page}">{{index*30+1}}-{{(index*30+30)>int?int:(index*30+30)}}</a>
                </div>
            </div>
        </div>
        <div class="list" v-for="list in items" :key="list.id">
            <span class="title">{{list.title}}</span>
            <i class="duration">{{s_to_hs(list.duration)}}</i>
            <i class="time">{{list.update_time}}</i>
            <a class="paly"></a>
            <a class="dow"></a>
        </div>
    </div>
</template>

<script>
    import Golbal from "./Golbal"
    export default {
        name: "jie-mu",
        props:["id","int"],
        data:function(){
          return {
              items:[],
              selections:false,
              page:0
          }
        },
        methods:{
            initialize:function (page) {
                let vm = this;
                Golbal.gain(vm).then(function (data) {
                    vm.$axios.get(`/api/media/v7/channelondemands/${vm.id}/programs`,{
                        params:{
                          page:page
                        },
                        headers:data
                    }).then(function (response){
                        vm.items = response.data.data;
                        vm.page = response.data.page;
                    })
                });
            },
            s_to_hs:function (s) {
                var h;
                h = Math.floor(s/60);
                s = s%60;
                h += '';
                s += '';
                h = (h.length==1)?'0'+h:h;
                s = (s.length==1)?'0'+s:s;
                return h+':'+s;
            }
        },
        mounted:function () {
            this.initialize(1);
        },
        computed:{
            number:function () {
                var num;
                if(this.int%30==0){
                    num = Math.floor(this.int/30)
                }else{
                    num = Math.floor(this.int/30) + 1;
                }
                return num;
            }
        }
    }
</script>

<style scoped>
    .nav{height:2.5rem;background:#f3f3f3;padding:0 2.5rem;border-bottom: 1px solid #e6e6e6;border-top: 1px solid #e6e6e6;display: flex;justify-content:space-between;}
    .nav span{line-height: 2.5rem;color: #999999;}
    .nav>a{line-height: 2.5rem;padding-left: 2rem;color: #717171;background-image: url("../../assets/fonts/icon_xj.png");background-repeat: no-repeat;background-size: 1.5rem;background-position:0 center;}

    .list{height: 3rem;padding:0 1.25rem;border-bottom: 1px solid #e6e6e6;overflow: hidden;}
    .list span,.list i{display: inline-block;line-height: 3rem;float: left;overflow: hidden;}
    .list span{font-size: 1rem;color: #666666;}
    .list i{font-size: 0.75rem;font-style:normal;padding-left: 1rem;color: #a3a3a3;background-position:0 1rem;background-repeat: no-repeat;background-size:0.8rem;margin-left:0.5rem;}
    .list .title{width:42%;}
    .list .num{width:16%;margin-left:2%;}
    .list .duration{width:10%;background-image: url("../../assets/fonts/icon_duration.png");}
    .list .ci-shu{background-image: url("../../assets/fonts/icon_ci_shu.png");}
    .list .time{width:20%;height: 3rem;background-image: url("../../assets/fonts/icon_time.png");}
    .list a{display: inline-block;width:8%;line-height: 2rem;height: 2rem;float: left;;background-position:center;background-repeat: no-repeat;background-size:1.5rem;padding:0.5rem 0;}
    .list .paly{background-image: url("../../assets/fonts/icon_sp1.png");}
    .list .dow{background-image: url("../../assets/fonts/icon_dow.png");}

    .shade{width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: #000000;opacity: 0.5;z-index:1000;}
    .selections{width: 90%;position: fixed;top: 50%;left: 50%;margin-top:-7rem;transform: translate(-50%);background: rgba(255,255,255,1);z-index: 1001;border-radius: 1rem;box-sizing: border-box;}
    .selections h3{line-height: 2.5rem;padding-left: 1.25rem;font-size: 1.25rem;font-weight: 400;border-bottom: 1px solid #e6e6e6;}
    .selections h3:before{content:"";display: inline-block;width:0.25rem;height:1rem;background:#fd5050;margin-right:0.4rem;border-radius: 0.1rem;}
    .selections .links{padding:0.5rem 1.25rem;display: flex;flex-wrap:wrap;justify-content:flex-start;}
    .selections .links a{display: inline-block;width: 22%;height: 2.5rem;text-align: center;line-height: 2.5rem;;border: 1px solid #e7e7e7;margin-bottom: 1rem;border-radius: 1rem;font-size:1rem;color: #666666;box-sizing: border-box;}
    .selections .links a:nth-child(4n+1){margin-right: 4%;}
    .selections .links a:nth-child(4n+2){margin-right: 4%;}
    .selections .links a:nth-child(4n+3){margin-right: 4%;}
    .selections .links .active{border-color: #ff4545;color: #ff4545;}
</style>