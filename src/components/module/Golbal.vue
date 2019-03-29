<script>
    //localStorage.access_token为访问令牌
    //localStorage.expires_in为获取到令牌时令牌的剩余有效时间
    //localStorage.time为获取令牌的时间戳
    let deviceNb = "00000000-0000-0000-0000-000000000000";//当前设备的设备号
    let gain = function (vm) {
        let p = new Promise(function (resolve) {
            if(localStorage.access_token == undefined||Date.parse(new Date())/1000-localStorage.time>localStorage.expires_in-180){
                vm.$axios.post("/api//auth/v7/access",{
                    grant_type:"client_credentials",
                    client_id:"NTE5NTc2NWEtMTIyZC0xMWU5LTkyM2YtMDAxNjNlMDAyMGFk",
                    client_secret:"NTg0NDlmOTAtY2RhYS0zYjhlLTg0YTYtNTgzN2UyNDRiMTYz"
                }).then(function (response){
                    localStorage.access_token = response.data.data.access_token;
                    localStorage.expires_in = response.data.data.expires_in;
                    localStorage.time = Date.parse(new Date())/1000;
                    console.log("从服务器获取了令牌");
                    resolve({
                        "QT-Device-Id":deviceNb,
                        "QT-Access-Token":localStorage.access_token
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }else{
                // console.log("直接获取了令牌");
                resolve({
                    "QT-Device-Id":deviceNb,
                    "QT-Access-Token":localStorage.access_token
                });
            }
        })
        return p;
    }

    export default {
        gain
    }
</script>