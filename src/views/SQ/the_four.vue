<template>
<div class="shufour">
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
                imguser:require("@/assets/images/小绘TEON.jpg"),
                img:require("@/assets/images/小绘.png"),
                username:"小绘TEON",
                txt1:"烟火",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/要想富先修路.png"),
                img:require("@/assets/images/要想富先修路.jpg"),
                username:"要想富先修路",
                txt1:"灰",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/人中.png"),
                img:require("@/assets/images/人中ere.jpg"),
                username:"人中ere",
                txt1:"wu",
                // txt2:"33333",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/猫.jpg"),
                username:"一张好画",
                txt1:"画师： matayosi ​​​",
                // txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/粉.jpg"),
                username:"一张好画",
                txt1:"画师： matayosi ​​​",
                // txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            }],
           
        }
    }
}
</script>
