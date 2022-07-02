<template>
    <div class="txt_and_top_right_right_right">
        <div class="txt_and_top_right_right_right_one">
            <img src="@/assets/images/公告.png" alt="">
            <span>今日必读</span>
            <a href="">More ></a>
        </div>
        <div class="txt_and_top_right_right_right_tow" >
                    <swiper :options="swiperOption" ref="mySwiper" class="txt_and_top_right_right_right_tow_one" >

                    <swiper-slide v-for="(banner,index) in bannerList" :key="index" class="txt_and_top_right_right_right_tow_one_one">
                        <img :src="banner.src" />
                        <!-- <span>{{ banner.name }}</span> -->
                    </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                    </swiper>
        </div>
    </div>
</template>


<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import SwiperCore, { Autoplay,EffectCube} from 'swiper';
// SwiperCore.use([Autoplay,EffectCube]);





    export default {

                components: {},

                props: {},

                data() {

                    return {
                        date:[
                            // {
                            //     name:"余念"
                            // },{
                            //     name:"多血质和抑郁夜"
                            // }
                        ],
                        
                    bannerList: [
                        { 
                            src: require("@/assets/images/余念.jpg"),
                            // name:"余念"
                        //   name:余念
                        },
                        { 
                            src: require("@/assets/images/多血质和抑郁夜.jpg"),
                            // name:"多血质和抑郁夜"
                        },
                                               
                    ],

                    swiperOption: {
                        speed:500,

                        centeredSlides:true,

                        loop: true, //是否循环轮播

                        speed: 1000, //切换速度

                        spaceBetween:'7%',

                        observer: true, //修改swiper自己或子元素时，自动初始化swiper

                        observeParents: true, //修改swiper的父元素时，自动初始化swiper

                        //自动轮播

                        autoplay: {

                            delay: 2000,

                            disableOnInteraction: false,

                        },

                        //设置slider容器能够同时显示的slides数量

                        slidesPerView:2,

                        //分页器

                        pagination: {

                            el: ".swiper-pagination",

                            clickable: true, // 允许点击小圆点跳转

                        },

                        //设置轮播样式,此处为3d轮播效果

                        effect: "coverflow",

                        coverflowEffect: {

                            rotate: 0, // 旋转的角度

                            stretch: 6, // 拉伸 图片间左右的间距和密集度

                            depth: 200, // 深度 切换图片间上下的间距和密集度

                            modifier:2, // 修正值 该值越大前面的效果越明显

                            // slideShadows: true, // 页面阴影效果
                            slideShadows: false,

                        },

                },

                };

                },
    }
</script>