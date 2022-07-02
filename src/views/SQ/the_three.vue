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
                imguser:require("@/assets/images/夜鸦.jpg"),
                img:require("@/assets/images/夜鸦图.jpg"),
                username:"夜鸦",
                txt1:"哈尔的移动城堡（同人图）",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/鹿荷HE.jpg"),
                img:require("@/assets/images/鹿荷.jpg"),
                username:"鹿荷HE",
                txt1:"太久没有动剪刀来剪纸了",
                txt2:"今日份的纾压成品 ​​​",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/董二毡.png"),
                img:require("@/assets/images/董二毡图.jpg"),
                username:"鹿荷HE",
                txt1:"太久没有动剪刀来剪纸了",
                txt2:"今日份的纾压成品 ​​​",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/精灵.jpg"),
                username:"一张好画",
                txt1:"画师： matayosi ​​​",
                // txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            },],
           
        }
    }
}
</script>
