<template>
<div class="nomberone">
    <div id="heand">
        <div class="heand">
                <div class="heand-topone">
                    <a href="javascript:;" @click="reverturn"><img src="@/assets/images/logo.png"></a>
                </div>
                <div class="heand-toptow">
                    <span>
                        <input type="text" placeholder="请输入关键字" class="search-box">
                        <a @click="revert"><img src="@/assets/images/ssuo.png"></a>
                    </span>
                </div>
                <div class="heand-topthree">
                    <div class="right"><a href="">充值</a></div>
                    <div class="qrcodebox">
                        <span><a  href="" @mouseenter="enterhe" @mouseleave="leavehe" v-show="into">下载APP</a></span>
                        <img v-show="seen" @mouseenter="enterhe" @mouseleave="leavehe" src="@/assets/images/二维码.png" alt="" class="code-big-hide">
                         <!-- v-show="seen"       @mouseenter="enterhe" @mouseleave="leavehe" -->
                    </div>
                    <div class="is_left">
                        <ul>
                            <li>
                                <a href="">注册</a>
                                <span>|</span>
                                <a href="">登录</a>
                            </li>
                        </ul>
                        
                        
                    </div>
                </div>
        </div>
    </div>

    
</div>
      
</template>
<script>
import indexYC from '@/views/Status'
import Search from '@/views/CPQ'

export default{
    name:"heand",
    data(){
        return{
            current: 'Status',
            seen:false,
            into:true,
        }
    },
    methods:{
        enterhe(){
            this.into=true;
            this.seen=true;
        },
        leavehe(){
            this.into=true;
            this.seen=false;
        },
        reverturn(){
            this.$router.replace('/');
        },
        revert(){
            this.$router.replace('/CPQ');         //'indexTQ'
        },
       
    },
     components : {
        indexYC,
        Search,
        
    },
}
</script>
