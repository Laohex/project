<template>
  	<div class="banner">
		  <div>
			<a @click="show(item.shorthand)">
				<img src="@/assets/images/主页1.jpg" />
				</a>
			<a @click="show(item.shorthand)">
				<img src="@/assets/images/主页2.jpg" />
				</a>
			<a @click="show(item.shorthand)">
				<img src="@/assets/images/主页3.jpg" />
				</a>
		  </div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'banner',
	mounted: function(){
		var len = $(".banner").find("a");//获取广告图片
	var pos = 0;//定义变量值为0
	setInterval(function(){
		len.eq(pos).hide();//隐藏元素
    	pos++;//变量值加1
    	if(pos == len.length) pos=0;//变量值重新定义为0
    	len.eq(pos).show();//显示元素
	},3000);//每隔3秒钟切换元素
	}
}


// export default{
// 	name: 'YC_TOW',
// 	methods: {
// 		show: function(value){
// 			this.$router.push({name: value});
// 		}
// 	}
// }
</script>