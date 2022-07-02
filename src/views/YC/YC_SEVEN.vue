<template>
    <div class="text_rotation">
        <div class="text_rotation_left">
            <img src="@/assets/images/小喇叭 (2).png" alt="">
        </div>
        <div class="text_rotation_right" @mouseenter="on_top_enter" @mouseleave="on_top_leave">
            <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="text_rotation_right_one" >
                <a href="">
                    <p>
                        <span v-for="(item,index) in date" :key="index" class="top">
                            <span class="one">{{ item.username }}</span>
                            {{ item.words }}
                            <span class="tow">{{ item.thanker }}</span>
                            {{ item.reward }}
                        </span>
                        
                    </p>
                </a>
            </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default{
    components:{},
    props:{},
    methods: {
	    	//通过获得的swiper对象来暂停自动播放
            on_top_enter() {
                this.mySwiper.autoplay.stop()
            },
            on_top_leave() {
                this.mySwiper.autoplay.start()
            }
        },
		//计算属性，获得可以操作的swiper对象
        computed: {
            mySwiper() {
            	// mySwiper 是要绑定到标签中的ref属性
                return this.$refs.mySwiper.swiper
            },
            myBotSwiper() {
                return this.$refs.myBotSwiper.swiper
            }
        },
        created: function() {
        },
    data(){
        return{
            
            date:[{
                username:"孟不归",
                words:"送给《若白驹之过隙，忽然而已》",
                thanker:"广修天下",
                reward:"猫薄荷 X 10"
            },{
                username:"扣降",
                words:"送给《纸飞机》 ",
                thanker:"潭石",
                reward:"老虎油 X 2"
            },{
                username:"青花鱼_cdhkhxvhmin",
                words:"送给 《不驯》",
                thanker:"广修天下",
                reward:"老虎油 X 1"
            },{
                username:"冰痕",
                words:"送给 《行到水穷处》",
                thanker:"冰痕",
                reward:"幸运铃 X 1"
            },{
                username:"小葵咕",
                words:"送给 《不解契》",
                thanker:"小葵咕",
                reward:"幸运铃 X 1"
            },{
                username:"蹲着吃西瓜",
                words:"送给 《纸飞机》",
                thanker:"潭石",
                reward:"猫薄荷 X 10"
            },{
                username:"孟不归",
                words:"送给 《若白驹之过隙，忽然而已》",
                thanker:"广修天下",
                reward:"幸运铃 X 1"
            },{
                username:"阿列夫零",
                words:"送给 《我的再普乐》",
                thanker:"cakefactory",
                reward:"幸运铃  X 10"
            },


            ],
            swiperOption:{
                loop : true,
                slidesPerView : 3,
                slidesPerGroup : 3,
                spaceBetween : 20,
                freeMode: true,
                setWrapperSize :true,//自动轮播
                grabCursor: true,//鼠标光标
                centeredSlidesBounds: true,
                loopAdditionalSlides: 3,
                grabCursor: true, 
                // centeredSlides : true,
                speed : 200000,
                // slidesPerView : 3.7,
                autoplay : {
                    // delay:1000,
                    // disableOnlnteraction:false,
                    delay: -1, //间隔时间0秒
                    stopOnLastSlide: false, 
                    disableOnInteraction: false,
                    // disableOnInteraction: false, 
                },
                pagination: {
                        el: '.swiper-pagination',
                        // 设置点击可切换
                        clickable :true
                    },
                slidesPerView:1,
                //  effect: "coverflow",

                        coverflowEffect: {

                            rotate: 0, // 旋转的角度

                            stretch: 0, // 拉伸 图片间左右的间距和密集度

                            depth: 60, // 深度 切换图片间上下的间距和密集度

                            modifier: 2, // 修正值 该值越大前面的效果越明显

                            slideShadows: false, // 页面阴影效果

                        },
            }

        }
    }
}
</script>
