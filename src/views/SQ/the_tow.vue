<template>
<div class="shu">
    <div class="the_left_one"  v-for="(item,index) in data" :key="index" >
        <!--  -->
       <div class="the_left_one_top">
            <div class="the_left_one_one">
                <img :src="item.imguser" alt="">
            </div>
            <div class="the_left_one_tow" >
                <a href="">{{item.username}}</a>
            </div>
            <div class="the_left_one_three">
                <a href="">
                    <span>关 注</span>
                </a>
            </div>
       </div>
        <!--  -->
        <div class="the_left_one_img">
            <img :src="item.img" alt="">
        </div>
        <!--  -->
          <div class="the_left_one_txt">
            <p class="pone">{{item.txt1}}</p>
            <p class="ptow">{{item.txt2}}</p>
        </div>
        <!--  -->
        <div class="the_left_one_bottom">
            <a href=""><img src="@/assets/images/百合.png" alt=""></a>
            <span>{{item.perpor}}</span>
        </div>
    </div>
</div>
    
</template>
<script>
export default{
    data(){
        return{
            data:[{
                imguser:require("@/assets/images/伊吹鸡腿子.jpg"),
                img:require("@/assets/images/伊吹鸡腿子图.jpg"),
                username:"伊吹鸡腿子",
                txt1:"新校服的摸鱼凑个九~ ",
                // txt2:"",
                perpor:"1万+  个人喜欢"
            },{
                imguser:require("@/assets/images/望月.png"),
                img:require("@/assets/images/望月けい.jpg"),
                username:"望月けい",
                txt1:"转载自：望月けい",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/桥.png"),
                img:require("@/assets/images/桥图.png"),
                username:"桥",
                txt1:"之后会出服装设定图，欢迎大家出着玩🥺",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/地铁.jpg"),
                username:"一张好画",
                txt1:"画师： matayosi ​​​",
                // txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            },],
           
        }
    }
}
</script>
