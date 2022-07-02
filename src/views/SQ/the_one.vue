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
                imguser:require("@/assets/images/夏达头像.jpg"),
                img:require("@/assets/images/夏达1.jpg"),
                username:"夏达",
                txt1:"这一期更啦👌我真的，蛮喜欢画小匹夫",
                txt2:"",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/五宝老师.jpg"),
                img:require("@/assets/images/亲爱的L.jpg"),
                username:"一天睡23H",
                txt1:"去重温了一遍《亲爱的L》，不得不说真是很好看，画风啊故事啊，都是喜欢的点。",
                txt2:"美中不足就是更新太慢🐒",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/无页.jpg"),
                img:require("@/assets/images/无页图.png"),
                username:"无页",
                txt1:"稿",
                // txt2:"",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/蓝.jpg"),
                username:"一张好画",
                txt1:"好喜欢这种蓝色",
                txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            },{
                imguser:require("@/assets/images/一张好画.jpg"),
                img:require("@/assets/images/鸭.jpg"),
                username:"一张好画",
                txt1:"好喜欢这种蓝色",
                txt2:"twi:O_skyblue ​​​",
                perpor:"12919i2"
            },
            ],
           
        }
    }
}
</script>
