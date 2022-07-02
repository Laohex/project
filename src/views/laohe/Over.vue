<template>
    <div class="over">
        <div class="over-top">
            <span class="ys"></span>
            <span id="wj">完结推荐</span>
            <div class="hyh1">
                <img src="@/assets/images/hyh.png">
                <span>换一换</span>
            </div>
        </div>
        <div class="carousel" ref="carousel">
            <div class="whole">
                <div class="roll-img">
                    <!-- <span class="last" @click="after" v-show="showIndex"><</span>			   -->
                    <!-- 图片容器 -->
                    <ul id="ul">
                        <li v-on:click="change($event)" :class="classes[index]" v-for="(item, index) in imgs"  :key="index"><a href="javascript:;"><img :src="item.cover" :title="item.name"></a>
						
						</li>
                    </ul>
                    <!-- <span class="next" @click="before" v-show="showIndex">></span> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
	name:'over',
	data: function() {
		return {
			// showIndex : false, // 是否显示左右按钮
			imgs: [
				{
					cover:require('@/assets/images/de.jpg')
				}, 
				{
					cover:require('@/assets/images/ssz.jpg')
				},  
				{
					cover:require('@/assets/images/jj.jpg')
				}, 
				   ], // 图片库
			classes: ['left', 'center', 'rights'],
			timer : null
		}
	},
	methods:{
		before() {
			let last = this.classes.pop();
			this.classes.unshift(last);
		},
		after() {
			let first = this.classes.shift();
			this.classes.push(first);
		},
		change(e) {
			if(e.target.parentNode.classList.contains('left')) {
				this.after();
			} else if (e.target.parentNode.classList.contains('right')) {
				this.before()
			} else {
				return false;
			}
		}
	},
	mounted: function(){
		var that = this;
		// this.$refs.carousel.addEventListener('mouseover', function() {
		// 	that.showIndex = true;
		// 	clearInterval(that.timer)
		// })
		// this.$refs.carousel.addEventListener('mouseout', function() {
		// 	that.showIndex = false;
		// 	that.timer = setInterval(() => {
		// 		that.before();
		// 	}, 3000)
		// })
		this.timer = setInterval(() => {
			this.before();
		}, 3000)
	},
	beforeDestroy() { 
		clearInterval(this.timer)
	}
}
</script>