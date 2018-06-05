<template>
    <div class="Result">
        <div class="bannerbg">
            <div class="title">
                <div class="title_left">
                    <h3>风险评估报告</h3>
                    <p>{{date}}</p>
                </div>
                <div class="title_right" @click="Retest()">
                    重测
                </div>
            </div>
            <div class="chart">
                <ul class="tabs">
                    <li @click="toggleTabs(0)">
                        <div class="chart_left">
                            <div class="circle">
                                <yd-progressbar
                                        :progress="progress1"
                                        trail-width="12"
                                        stroke-width="12"
                                        stroke-color="#95c6ff"
                                        trail-color="#fffca8"
                                        fill-color="rgba(0,0,0,0)"
                                ><span style="color: #fff600;">{{gzd}}</span></yd-progressbar>
                            </div>
                            <div class="jt">健康风险</div>
                            <div class="borderxian" v-show="li1"></div>
                        </div>
                    </li>
                    <li @click="toggleTabs(1)">
                        <div class="chart_right">
                            <div class="border_right">
                                <div class="circle">
                                    <yd-progressbar
                                            :progress="progress2"
                                            trail-width="12"
                                            stroke-width="12"
                                            stroke-color="#95c6ff"
                                            trail-color="#fffca8"
                                            fill-color="rgba(0,0,0,0)"
                                    ><span style="color: #fff600;">{{cwf}}</span></yd-progressbar>
                                </div>
                                <div class="cw">财务风险</div>
                            </div>
                            <div class="borderxian" v-show="li2"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="tabtwo" v-show="nowIndex === 0">
            <div class ='tbleft'>
                <div class="tbleft_con">
                    <div class="yang fxlow" v-show="fxlow">
                        年轻就是身体的本钱，但也要加强运动！因为在30岁以后，身体机能开始下滑，需要未雨绸缪哦。
                    </div>
                    <div class="fxin" v-show="fxin">
                        30岁后，我们的身体衰老加速，拼搏事业、照顾家庭的同时别忘了多多关心自身的健康。
                    </div>
                    <div class="fxhigh" v-show="fxhigh">
                        45岁后，重大疾病的发病率明显提升，没有健康的基石，看起来安稳的幸福也是脆弱的。
                    </div>
                    <h4>{{sex}}性25种重疾发病率</h4>
                    <h5>中国人身保险业重大疾病经验发生率表</h5>
                    <!--eharts图表-->
                    <div class="xians">
                        <span>{{eachartsage}}岁</span><br />
                        <span>{{perc}}%</span>
                    </div>
                    <div class="chart_excel" id="charts">
                        <div class="" id="main" style="height: 2.9rem;"></div>
                    </div>
                    <div class="title1">
                        <span>{{agetxt}}</span>岁<span>{{sex}}</span>性易发重疾
                    </div>
                    <!--18~29岁====男====性易发重疾-->
                    <div class="nessbox" v-show="manshow1">
                        <div class="nessbox_t">
                            <div class="">
                                <img class="img1" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img class="img2" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/leukemia.jpg"/>
                            </div>
                            <div class="">
                                <img class="img3" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>白血病</span><span>脑血管病</span>
                        </div>
                    </div>
                    <!--30~39岁====男性===易发重疾-->
                    <div class="nessbox" v-show="manshow2">
                        <div class="nessbox_t">
                            <div class="">
                                <img class="img1" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img class="img2" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/gan.jpg"/>
                            </div>
                            <div class="">
                                <img class="img3" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>肝癌</span><span>脑血管病</span>
                        </div>
                    </div>
                    <!--40~49岁====男===性易发重疾-->
                    <div class="nessbox" v-show="manshow3">
                        <div class="nessbox_t">
                            <div class="">
                                <img class="img1" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img class="img3" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                            <div class="">
                                <img class="img2" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/gan.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>脑血管病</span><span>肝癌</span>
                        </div>
                    </div>
                    <!--50~59岁====男====性易发重疾-->
                    <div class="nessbox" v-show="manshow4">
                        <div class="nessbox_t">
                            <div class="">
                                <img class="img3" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                            <div class="">
                                <img class="img1" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img class="img2" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/gan.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>脑血管病</span><span>心脏病</span><span>肝癌</span>
                        </div>
                    </div>
                    <!--60~70岁===男===性易发重疾-->
                    <div class="nessbox" v-show="manshow5">
                        <div class="nessbox_t">
                            <div class="">
                                <img class="img2" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img class="img1" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/fei.jpg"/>
                            </div>
                            <div class="">
                                <img class="img3" src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>肺癌</span><span>脑血管病</span>
                        </div>
                    </div>
                    <!--18~29岁===女===性易发重疾-->
                    <div class="nessbox" v-show="womanshow1">
                        <div class="nessbox_t">
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/leukemia.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/nerve.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>白血病</span><span>神经系统疾病</span>
                        </div>
                    </div>
                    <!--30~39岁===女===性易发重疾-->
                    <div class="nessbox" v-show="womanshow2">
                        <div class="nessbox_t">
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/xr.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>心脏病</span><span>乳腺癌</span><span>脑血管病</span>
                        </div>
                    </div>
                    <!--40~49岁===女==性易发重疾-->
                    <!--50~59岁===女==性易发重疾-->
                    <!--60~70岁===女===性易发重疾-->
                    <div class="nessbox"  v-show="womanshow3">
                        <div class="nessbox_t">
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/brain.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/heart.jpg"/>
                            </div>
                            <div class="">
                                <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/fei.jpg"/>
                            </div>
                        </div>
                        <div class="nessbox_b">
                            <span>脑血管病</span><span>心脏病</span><span>肺癌</span>
                        </div>
                    </div>
                    <div class="title2">
                        智能顾问专家推荐方案
                    </div>
                    <div class="doctor" v-show="doctor">
                        <p>考虑到你的年龄情况，有一定的重疾风险，建议你选择重疾险，适当搭配医疗险。</p>
                        <img src="http://topmdrt-app.oss-cn-shenzhen.aliyuncs.com/cloud-store/doctor.png"/>
                    </div>
                    <div class="inquiry" @click="Isfollow">咨询保险专家</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import echarts from 'echarts'
    import axios from 'axios'
    import qs from 'qs'
    import {ProgressBar} from 'vue-ydui/dist/lib.rem/progressbar'
    import {echartswoman,echartsman} from '../../assets/data/echarts.js'
    import {phpUrl,getUserSurvey,getpersonData,getcloudstoreData,getShareJs} from '../../api/common.js'
    import wx from 'weixin-js-sdk'
    export default {
        data() {
            return {
                tabsParam:['tab1','tab2'],//（这个也可以用对象key，value来实现）
                nowIndex:0,//默认第一个tab为激活状态
                li1 : true,
                li2 : false,
                date : '2017-10-11',
                value1: 3.5,//医疗险
                value0 : 5,//重疾险
                value2: 1.5,//人寿险
                value3 : 2,//意外险
                progress1: 0.8,
                progress2: 0.5,
                echartswoman : echartswoman,//图表女性数据
                echartsman : echartsman,//图表男性数据
                zhongj : true, //重疾险
                yiliao : true, //医疗险
                yiliao1 : false,//医疗险
                rensh : true,//人寿险
                yiwai : true,//意外险
                rensh1 : false,//人寿险
                fxlow : false, //健康风险低
                fxin : false, //健康风险中
                fxhigh : false,//健康风险高
                yiliaotxt : '30-50万',//医疗险投保金额
                zhongjtxt : '30-50万',//重疾险投保金额
                renshtxt : '10-20万',
                yiwaitxt : '12-20万',
                gzd : '低', //健康风险
                cwf : '低',//财务风险
                cwlow : true,
                cwhigh:false,
                thisyear : '',
                sex : '男',//男女
                address : '',//地址
                eachartsage : 20,
                perc : 0.06,
                age : '',//年龄
                agetxt : '18~29',//年龄阶段
                income : '',//年收入,
                cwtxt1 :false,//财务风险显示文案
                cwtxt2 :false,
                cwtxt3 :false,
                womanshow1 : false,//女性重疾显示18-29
                womanshow2 : false,//女性重疾显示30-39
                womanshow3 : false,//女性重疾显示40-70
                manshow1 : false,//男性重疾显示18-29
                manshow2 : false,//男性重疾显示30-39
                manshow3 : false,//男性重疾显示40-49
                manshow4 : false,//男性重疾显示50-59
                manshow5 : false,//男性重疾显示60-70
                cw1 : false,//家庭资产负债率
                cw2 : false,
                cw3 : false,
                cw4 : false,
                repayloan : true,//还贷风险显示
                userid : '',
                openid :'',
                doctor : true,
                doctor1 : true,
                qrcode_url : '',
                zhongjipop : false,//重疾险弹框
                yiliaopop : false,//医疗险弹框
                yiwaipop : false,//意外险弹框
                renshoupop : false,//人寿险弹框
                popshow0 : false,//二维码弹框
            }
        },
        //进入路由的时候判断是否测过，未测过跳转测试页面
        beforeRouteEnter (to, from, next) {
            let openId = localStorage.cloud_openid
            let	user_id = sessionStorage.getItem('userid')
            axios.post(phpUrl + getUserSurvey, qs.stringify({
                'openid': openId,
                'userid': user_id
            }))
                .then((res)=>{
                    next(vm => {
                        if(!res.data.data.mobile && !res.data.data.results){
                            console.log('没有测过...')
                            vm.$router.push({ path: `/Test/userid/${vm.userid}` })
                        }else{
                            console.log('有测试过...')
                        }
                    })
                })
                .catch((error)=>{
                    console.log(error)
                })
        },
        created(){
        },
        mounted (){
            this.userid = sessionStorage.getItem('userid')
            this.openid = localStorage.cloud_openid
            this.getData()
            this.getNowFormatDate()
            this.Share()
        },
        computed: {
            countYear() {
                let nums = (Number(this.thisyear)*10 - Number(this.age)*10)/10
                return nums
            }
        },
        methods :{
            PopOpen(i){
                if(i == 0){
                    this.zhongjipop = true
                }else if(i == 1){
                    this.yiliaopop = true
                }else if(i == 2){
                    this.yiwaipop = true
                }else if(i == 3){
                    this.renshoupop = true
                }
            },
            PopClose(i){
                if(i == 0){
                    this.zhongjipop = false
                }else if(i == 1){
                    this.yiliaopop = false
                }else if(i == 2){
                    this.yiwaipop = false
                }else if(i == 3){
                    this.renshoupop = false
                }else if(i == 4){
                    this.popshow0 = false
                }
            },
            toggleTabs(index){
                this.nowIndex = index
                if(index == 0){
                    this.li1 = true
                    this.li2 = false
                }else{
                    this.li2 = true
                    this.li1 = false
                }
            },
            Retest(){
                this.$router.push({ path: `/Test/userid/${this.userid}` })
            },
            // 当前日期
            getNowFormatDate() {
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let strDate = date.getDate()
                if (month >= 1 && month <= 9) {
                    month = "0" + month
                }
                if (strDate >= 0 && strDate <= 9) {
                    strDate = "0" + strDate
                }
                let currentdate = year + '-' + month + '-' + strDate
                this.date = currentdate
                return currentdate
            },
            //获取个人资料
            Isfollow(){
                //console.log('咨询保险专家')
                axios.post(phpUrl + getcloudstoreData, qs.stringify({
                    'openid': this.openid,
                    'userid': this.userid
                }))
                    .then((res)=>{
                        console.log(res.data.data)
                        let iscloud = res.data.data.iscloud
                        //不是云店
                        if(iscloud == 0){
                            this.qrcode_url = res.data.data.qrcode_url
                            this.popshow0 = true
                        }else if(iscloud == 1){
                            //是云店
                            this.qrcode_url = 'http://oss-img.topmdrt.com/cloudshop/upload/qrcode/'+ this.userid +'.png'
                            this.popshow0 = true
                        }
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },


            getData (){
                //获取userid
                let date = new Date
                let year = date.getFullYear()
                this.thisyear = year
                var myDate = new Date()
                axios.post(phpUrl + getUserSurvey, qs.stringify({
                    'openid': this.openid,
                    'userid': this.userid
                }))
                    .then((res)=>{
                        console.log(res)
                        if(res.data.error == 0){
                            if(!res.data.data.mobile && !res.data.data.results){
                                //this.$router.push({ path: `/Test/userid/${this.userid}` })
                            }else{
                                let dataResult = JSON.parse(res.data.data.results)
                                //console.log(dataResult)
                                // if(res.data.data.results === undefined || res.data.data.results === null || !res.data.data.results){
                                // 	this.$router.push({ path: `/Test/userid/${this.userid}` })
                                // }
                                console.log(dataResult)
                                //年收入	//重疾险保额
                                if(dataResult.yincome == 5 || dataResult.yincome == 15){
                                    this.zhongjtxt = '30万'
                                }
                                if(dataResult.yincome == 30 || dataResult.yincome == 50){
                                    this.zhongjtxt = '30万-50万'
                                }
                                if(dataResult.yincome == 80 || dataResult.yincome == 100){
                                    this.zhongjtxt = '50万-80万'
                                }
                                //财务风险高中低
                                //console.log(dataResult.loan)
                                //负债率
                                let fzl = parseFloat(dataResult.loan/10).toFixed(2)
                                //console.log(fzl)
                                if(fzl >= 7.5){
                                    this.progress2 = 0.75
                                    this.cwf = '高'
                                    this.cwtxt1 = true
                                    //负债率大于7.5人寿险在上面
                                    this.rensh = false
                                    this.rensh1 = true
                                    //人寿险星级
                                    this.value2 = 3
                                    //智能专家建议显示文案
                                    this.cwlow = false
                                    this.cwhigh = true
                                }
                                if(fzl > 4.5 && fzl < 7.5){
                                    this.progress2 = 0.5
                                    this.cwf = '中'
                                    //人寿险星级
                                    this.value2 = 2
                                    this.cwlow = true
                                    this.cwhigh = false
                                }
                                if(fzl <= 4.5){
                                    this.progress2 = 0.25
                                    this.cwf = '低'
                                    //人寿险星级
                                    this.value2 = 1.5
                                    this.cwlow = true
                                    this.cwhigh = false
                                }
                                //如果有娃人寿险加一星
                                if(dataResult.family == 1 || dataResult.family == 3){
                                    this.value2 = this.value2 + 1
                                }
                                //家庭负债率表
                                if(fzl <= 7.5){
                                    this.cw1 = true
                                }
                                if(fzl == 15){
                                    this.cw2 = true
                                }
                                if(fzl == 35){
                                    this.cw3 = true
                                }
                                if(fzl == 50){
                                    this.cw4 = true
                                }
                                if(fzl == 0){
                                    this.repayloan = false
                                }


                                //测试人年龄
                                if(dataResult.age){
                                    this.age = dataResult.age.split('-')[0]
                                    let yx = parseInt(this.thisyear) - parseInt(this.age)
                                    this.eachartsage = yx
                                    //console.log(yx)****************************************************
                                    this.AgeFn(yx)
                                    if(dataResult.sex == 'woman'){
                                        this.initEchart(1)
                                        let nl = this.echartswoman.age[yx]
                                        let nianl = parseFloat(this.echartswoman.pro[nl])
                                        this.perc = nianl.toFixed(2)
                                        //女性重疾显示
                                        if(yx >= 18 && yx <= 29){
                                            this.womanshow1 = true
                                        }
                                        if(yx >= 30 && yx <= 39){
                                            this.womanshow2 = true
                                        }
                                        if(yx >= 40 && yx <= 70){
                                            this.womanshow3 = true
                                        }
                                    }else{
                                        this.initEchart(0)
                                        let nnl = this.echartswoman.age[yx]
                                        let snl = parseFloat(this.echartswoman.pro[nnl])
                                        this.perc = snl.toFixed(2)
                                        //男性重疾显示
                                        if(yx >= 18 && yx <= 29){
                                            this.manshow1 = true
                                        }
                                        if(yx >= 30 && yx <= 39){
                                            this.manshow2 = true
                                        }
                                        if(yx >= 40 && yx <= 49){
                                            this.manshow3 = true
                                        }
                                        if(yx >= 50 && yx <= 59){
                                            this.manshow4 = true
                                        }
                                        if(yx >= 60 && yx <= 70){
                                            this.manshow5 = true
                                        }
                                    }
                                }
                                //应急资金
                                if(dataResult.funds == 35){
                                    this.value0 = this.value0 - 0.5
                                }
                                if(dataResult.funds == 45){
                                    this.value0 = this.value0 - 1
                                }
                                if(dataResult.funds > 45){
                                    this.value0 = this.value0 - 1.5
                                }
                                //性别选择为女性增加0.5颗星
                                if(dataResult.sex == 'woman'){
                                    this.value0 = this.value0 + 0.5
                                    this.sex = '女'
                                }
                                //医疗险有社保显示3颗星，无社保显示4颗星
                                if(dataResult.social == 1){
                                    this.value1 = 3
                                    this.yiliaotxt = '20-50万'
                                }else{
                                    this.value1 = 4
                                    this.yiliaotxt = '50-100万'
                                }
                                //所有星级最多5颗星
                                if(this.value0 >= 5){
                                    this.value0 = 5
                                }
                                if(this.value1 >= 5){
                                    this.value1 = 5
                                }
                                if(this.value2 >= 5){
                                    this.value2 = 5
                                }
                                if(this.value3 >= 5){
                                    this.value3 = 5
                                }
                                //人寿险保额
                                if(this.value2 == 1.5 || this.value2 == 2 || this.value2 == 2.5){
                                    this.renshtxt = '20万'
                                }
                                if(this.value2 >= 3){
                                    this.renshtxt = '20万-50万'
                                }
                                //意外险保额
                                if(this.value3 >= 1 && this.value3 <= 3){
                                    this.yiwaitxt = '30万'
                                }
                                if(this.value3 >= 3.5 && this.value3 <= 5){
                                    this.yiwaitxt = '30万-50万'
                                }
                            }
                        }else{
                            this.$router.push({ path: '/wrong' })
                        }
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            },



            //年龄
            AgeFn(yx){
                if(yx >= 18 && yx <= 29){
                    this.agetxt = '18~29'
                    //18岁到20岁医疗险在上面
                    this.doctor = false
                    this.yiliao1 = true
                    this.yiliao = false
                }
                if(yx >= 30 && yx <= 39){
                    this.agetxt = '30~39'
                }
                if(yx >= 40 && yx <= 49){
                    this.agetxt = '40~49'
                }
                if(yx >= 50 && yx <= 59){
                    this.agetxt = '50~59'
                }
                if(yx >= 60 && yx <= 70){
                    this.agetxt = '60~70'
                    //若年龄大于60则不显示重疾险
                    this.zhongj = false
                    //若年龄大于60不显示人寿险
                    this.rensh = false
                    //年龄大于60 不显示文案
                    this.doctor = false
                    this.doctor1 = false
                }
                // 健康风险
                if(yx >= 45){
                    this.progress1 = 0.75
                    this.gzd = '高'
                    this.fxhigh = true
                }
                if(yx >= 31 && yx <= 45){
                    this.progress1 = 0.5
                    this.gzd = '中'
                    this.fxin = true
                }
                if(yx >= 18 && yx <= 30){
                    this.progress1 = 0.25
                    this.gzd = '低'
                    this.fxlow= true
                }
                //重疾险星级
                //意外险星级
                if(yx >= 18 && yx <= 25){
                    this.value0 = 1
                    this.value3 = 1
                }
                if(yx >= 26 && yx <= 30){
                    this.value0 = 2
                    this.value3 = 2
                }
                if(yx >= 31 && yx <= 35){
                    this.value0 = 3
                    this.value3 = 3
                }
                if(yx >= 36 && yx <= 40){
                    this.value0 = 4
                    this.value3 = 4
                }
                if(yx >= 41 && yx <= 45){
                    this.value0 = 5
                    this.value3 = 5
                }
                if(yx >= 46 && yx <= 50){
                    this.value0 = 4
                    this.value3 = 4
                }
                if(yx >= 51 && yx <= 60){
                    this.value0 = 4
                    this.value3 = 4
                }
                if(yx >= 61 && yx <= 70){
                    this.value0 = 3
                    this.value3 = 3
                }
            },

            // 图表数据计算
            initEchart(i){
                //console.log(this.echartswoman.age)
                if(i == 1){
                    var xdata = this.echartswoman.age
                    var ydata = this.echartswoman.pro
                }else{
                    var xdata = this.echartsman.age
                    var ydata = this.echartsman.pro
                }
                var myChart = echarts.init(document.getElementById('main'));
                let option = {
                    title: {
                        show : false
                    },
                    tooltip : {
                        trigger: 'axis',
                        show : false,
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#e8f5fd'
                            }
                        }
                    },
                    toolbox: {
                        show :false,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '5%',
                        top : '4%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : xdata,
                            axislabel : { show:false},
                            axisline : { show:false},
                            axisLine:{
                                lineStyle:{
                                    color:'#c2cdd3'
                                }
                            },
                            //隐藏坐标轴刻度点
                            axisTick: {
                                show: false,
                                length : 10
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            min: 0,
                            max: 4,
                            axisLine:{
                                lineStyle:{
                                    color:'#c2cdd3'
                                }
                            },
                            axisLabel: {
                                formatter: '{value} %'
                            },
                            //隐藏坐标轴刻度点
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series : [
                        {
                            name:'发病率',
                            type:'line',
                            stack: '总量',
                            //拐点!!!!大小
                            symbolSize: 0,
                            itemStyle : {
                                normal:{
                                    color:'#e8f5fd'
                                }
                            },
                            lineStyle:{
                                normal:{
                                    width:1,  //连线粗细
                                    color: "#0087e8"  //连线颜色
                                }
                            },
                            areaStyle: {normal: {}},
                            data : ydata
                        }
                    ]

                }
                myChart.setOption(option)
            }

        }
    }
</script>

<style lang="less" scoped>
    .Result{
        .tabs{
            .flex;
            width: 100%;
            height: 2rem;
            li{
                flex : 1;
            }
            .borderxian{
                width: 100%;
                height: 0.08rem;
                background-color: #fff600;
                margin-top: 0.24rem;
            }
        }
    }
</style>