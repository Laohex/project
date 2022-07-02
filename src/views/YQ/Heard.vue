<template>
    <div class="tab">
         <div class="leftone">
             <a href="">
                 <img src="@/assets/images/YQ/古代.png" alt="">
                 <span>古代</span>
             </a>
             <a href="">
                 <img src="@/assets/images/YQ/现代.png" alt="">
                 <span>现代</span>
             </a>
              <a href="">
                 <img src="@/assets/images/YQ/悬疑.png" alt="">
                 <span>悬疑</span>
             </a>
              <a href="">
                 <img src="@/assets/images/YQ/幻想.png" alt="">
                 <span>幻想</span>
             </a>
         </div>

        <!-- 本周强推 -->
         <div class="bzqt">
            <div class="bzqt-top">
                <img src="@/assets/images/YQ/好评.png" alt="">
                <span>本周强推</span>
                <div class="right">
                    <a class="leftBtn" href="javascript:;" @click="turnLeft"></a>
                    <span>1/2</span>
                    <a class="rightBtn" href="javascript:;" @click="turnRight"></a>
			    </div>
            </div>
                <div class="bd" @mouseenter="stopMove" @mouseleave="continueMove">
                    <div class="bzqt-content" >
                        <ul>
                            <li v-for="(item,index) in data"  :key="index">
                                <a href="javascript:;"  @click="show(item.shorthand)">
                                    <img :src="item.imgUrl" :title="item.name">
                                </a>
                                <p class="name"><a href="javascript:;"  @click="show(item.shorthand)">{{item.name}}</a></p>
                                <p class="author">
                                    <img :src="item.imgurl">
                                    <a href="javascript:;">{{item.author}}</a>
                                </p>
                                <p class="brief">{{item.brief}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
         <!-- 今日必读 -->
        <div class="jrbd">
            <div class="jrbd-top">
                <img src="@/assets/images/YQ/BZQT/今日必读.png" alt="">
                <span>今日必读</span>
            </div>
            <div class="jrbd-content">
                <ul>
                    <li>
                        <a href="">
                            <img src="@/assets/images/YQ/BZQT/与你相识.jpg" alt="">
                        </a>
                        <p class="name"><a href="">与你相识在梦境</a></p>
                        <p class="author">
                            <img src="@/assets/images/YQ/BZQT/作者.png" alt="">
                            <a href="">黄昏时见你</a>
                        </p>
                        <p class="brief">陈眷一连做了三次梦，梦中的男主角都是同一个人。 朋友对她说：“听说梦见同一个人三次，你就能遇见他。” 陈眷不信，打算找个机会宰一顿这个胡说八道的朋友。 谁曾想人还没宰到，不可思议的事情就发生了，朋友的嘴居然像开过光一样，陈眷真的见到了梦中的那个人。</p>
                        <p class="lz"><a href="">连载</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/assets/js/YQ/data'
import $ from 'jquery'
export default {
    name:'heard',
    data:function(){
        return {
            data:data,
            nowScreen : 0,
			screenAmount : 0,
			timer: 0
        }
    },
    mounted: function(){
        this.screenAmount = $(".bzqt-content ul li").length / 3;//计算屏幕数量
	    $(".bzqt-content ul li:lt(3)").clone().appendTo(".bzqt-content ul");//复制前3个元素
		this.timer = setInterval(function(){
			var ele = document.getElementsByClassName("rightBtn")[0];
			var myEvent = document.createEvent("HTMLEvents");//创建事件类型
        	myEvent.initEvent("click", true, true);  //初始化事件
			ele.dispatchEvent(myEvent);//触发事件
		}, 6000);
    },
    destroyed: function(){
		clearInterval(this.timer);//销毁组件时停止移动
	},
    methods: {
		turnLeft: function(){
			this.stopMove();
			this.continueMove();
			if(this.nowScreen > 0){
			this.nowScreen--;//屏幕号减1
			$(".bzqt-content").animate({"left" : -698 * this.nowScreen} , 800);//定义动画
		}else{
			this.nowScreen = this.screenAmount - 1;
			$(".bzqt-content").css("left" , -698 * this.screenAmount).animate({"left" : -698 * (this.screenAmount - 1)},800);//移动到复制的5个元素并执行动画
		}
		    $(".bzqt-top .right span").html(this.nowScreen + 1 + "/" + this.screenAmount);
		},
		turnRight: function(){
			this.stopMove();
			this.continueMove();
			if(this.nowScreen < this.screenAmount - 1){
			this.nowScreen++ ;//屏幕号加1
			$(".bzqt-content").animate({"left" : -698 * this.nowScreen} , 700);//定义动画
		}else{
			this.nowScreen = 0;
			$(".bzqt-content").animate({"left" : -698 * this.screenAmount} , 700 , function(){
				$(this).css("left",0);//元素回到初始位置
			});
		}
		$(".bzqt-top .right span").html(this.nowScreen + 1 + "/" + this.screenAmount);//显示屏幕号
		},
		stopMove: function(){
			clearInterval(this.timer);//鼠标进入元素停止移动
		},
		continueMove: function(){
			//鼠标离开元素恢复移动
			this.timer = setInterval(function(){
				var ele = document.getElementsByClassName("rightBtn")[0];
				var myEvent = document.createEvent("HTMLEvents");
        		myEvent.initEvent("click", true, true); 
				ele.dispatchEvent(myEvent);
			}, 4000);
		},
		show: function(value){
			this.$router.push({name : value});
		}
	}
}
</script>