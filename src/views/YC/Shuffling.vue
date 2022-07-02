<template>
        <div class="txt_and_top_right_right_right_three" >
                    <swiper :options="swiperOption" ref="mySwiper" class="txt_and_top_right_right_right_tow_one_one" >

                        <swiper-slide v-for="(item,index) in date" :key="index" class="txt_and_top_right_right_right_tow_one_one_one_one">
                            <a href="" class="bookname">
                                {{ item.name }}
                            </a>
                            <!-- &nbsp; -->
                            <a href="" class="bookauthor">
                                {{ item.author }}
                            </a>
                        </swiper-slide>
                    </swiper>
        </div>
</template>


<script>
    export default {

                components: {},

                props: {},

                data() {

                    return {
                        
                    date: [
                        { 
                            name:"余念",
                            author:"方浅"
                        },
                        { 
                            name:"多血质和抑郁夜",
                            author:"柏君"
                        },
                                               
                    ],

                    swiperOption: {
                        speed:500,

                        centeredSlides:true,

                        loop: true, //是否循环轮播

                        speed: 1000, //切换速度

                        // spaceBetween:'44%',

                        observer: true, //修改swiper自己或子元素时，自动初始化swiper

                        observeParents: true, //修改swiper的父元素时，自动初始化swiper

                        centeredSlidesBounds: true,

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

                            rotate: 5, // 旋转的角度

                            stretch: -50, // 拉伸 图片间左右的间距和密集度

                            depth: 40, // 深度 切换图片间上下的间距和密集度

                            modifier:2, // 修正值 该值越大前面的效果越明显

                            // slideShadows: true, // 页面阴影效果
                            slideShadows: false,

                        },

                },

                };

                },
    }
</script>