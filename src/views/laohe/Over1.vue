<template>
    <div class="over1">
        <div class="carousel1" ref="carousel">
            <div class="whole1">
				<!-- <span class="last" @click="after" v-show="showIndex"><</span> -->
                <div class="over-bottom">
                    <div class="over-bottom-one">
                        <ul id="ul">
                        <li v-on:click="change($event)" :class="classes[index]" v-for="(item, index) in imgs"  :key="index">
						<a href="javascript:;" class="names">{{item.name}}</a>
							<a href="javascript:;" class="authoudsing">{{item.authouds}}</a>
							<p class="contents">{{item.content}}</p>
						</li>
                    </ul>
                    </div>
                </div>
				<!-- <span class="next" @click="before" v-show="showIndex">></span> -->
				<a href="javascript:;" class="ljyx">了解一下</a>		
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
	name:'over1',
	data: function() {
		return {
			// showIndex : false, // 是否显示左右按钮
			imgs: [
				{
					name:'渡厄',
                    authouds:'杨溯',
                    content:'我有孽徒，秀丽无双。'
				}, 
				{
					name:'私生子',
                    authouds:'福蝶',
                    content:'（已完结）世多风雨，愿君无忧'	
				},  
				{
					name:'骄矜',
                    authouds:'明月上西楼',
                    content:'听说我们八字不合？'
				}, 
				   ],
			classes: ['left1', 'center1', 'rights1'],
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
			if(e.target.parentNode.classList.contains('left1')) {
				this.after();
			} else if (e.target.parentNode.classList.contains('right1')) {
				this.before()
			} else {
				return false;
			}
		}
	},
	mounted() {
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