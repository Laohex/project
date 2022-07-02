<template>
    <div class="contents">
       <div class="contents-left">
           <div class="xxsj">
                <div class="wjqt-top">
                    <img src="@/assets/images/YQ/Classify/对勾(1).png" alt="">
                    <span>新鲜上架</span>
                </div>
                <div class="xxsj-content">
                    <ul>
                        <li v-for="(item,index) in book" :key='index' @mouseenter="enters(index)" @mouseleave="leaves">
                            <a href="javascript:;">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="javascript:;">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                        </li>
                    </ul>
                </div>
           </div>
           <div class="xsjx">
               <div class="wjqt-top">
                    <img src="@/assets/images/YQ/Classify/新书.png" alt="">
                    <span>新书精选</span>
                </div>
                <div class="xsjx-content">
                    <ul>
                        <li v-for="(item,index) in newbook" :key='index' @mouseenter="enter(index)" @mouseleave="leave">
                            <a href="">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                        </li>
                    </ul>
                </div>
                
           </div>
       </div>
       <div class="contents-right">
           <div class="gd">
               <div class="wjqt-top">
                   <span class="l"></span>
                   <span>古代</span>
                   <span class="go"><a href="">进入古代分类 ></a></span>
               </div>
               <div class="gd-content" >
                    <ul>
                        <li v-for="(item,index) in sort" :key='index' @mouseenter="gd(index)" @mouseleave="gdout">
                            <a href="">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                            <p class="sort">
                                <span class="sort1">{{item.sort1}}</span>
                                <span class="sort2">{{item.sort2}}</span>
                                <span class="sort3">{{item.sort3}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
           </div>
           <div class="xd">
               <div class="wjqt-top">
                   <span class="l"></span>
                   <span>现代</span>
                   <span class="go"><a href="">进入现代分类 ></a></span>
               </div>
               <div class="xd-content">
                    <ul>
                        <li v-for="(item,index) in modern" :key='index' @mouseenter="xd(index)" @mouseleave="xdout">
                            <a href="">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                            <p class="sort">
                                <span class="sort1">{{item.sort1}}</span>
                                <span class="sort2">{{item.sort2}}</span>
                                <span class="sort3">{{item.sort3}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
           </div>
           <div class="xy">
               <div class="wjqt-top">
                   <span class="l"></span>
                   <span>悬疑</span>
                   <span class="go"><a href="">进入悬疑分类 ></a></span>
               </div>
               <div class="xy-content">
                    <ul>
                        <li v-for="(item,index) in suspense" :key='index' @mouseenter="xy(index)" @mouseleave="xyout">
                            <a href="">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                            <p class="sort">
                                <span class="sort1">{{item.sort1}}</span>
                                <span class="sort2">{{item.sort2}}</span>
                                <span class="sort3">{{item.sort3}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
           </div>
           <div class="hx">
               <div class="wjqt-top">
                   <span class="l"></span>
                   <span>幻想</span>
                   <span class="go"><a href="">进入幻想分类 ></a></span>
               </div>
               <div class="hx-content">
                    <ul>
                        <li v-for="(item,index) in fantasy" :key='index' @mouseenter="hx(index)" @mouseleave="hxout">
                            <a href="">
                                <img :src="item.imgUrl">
                            </a>
                            <p class="name"><a href="">{{item.name}}</a></p>
                            <p class="author">
                                <img :src="item.imgurl">
                                <a href="">{{item.author}}</a>
                            </p>
                            <p class="brief">{{item.brief}}</p>
                            <p class="sort">
                                <span class="sort1">{{item.sort1}}</span>
                                <span class="sort2">{{item.sort2}}</span>
                                <span class="sort3">{{item.sort3}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import book from '@/assets/js/YQ/book'
import newbook from '@/assets/js/YQ/newbook'
import sort from '@/assets/js/YQ/sort'
import modern from '@/assets/js/YQ/modern'
import suspense from '@/assets/js/YQ/suspense'
import fantasy from '@/assets/js/YQ/fantasy'

import $ from "jquery"
export default {
    name:'classify',
    data:function(){
        return {
           book:book,
           newbook:newbook,
           sort:sort,
           modern:modern,
           suspense:suspense,
           fantasy:fantasy,
        }
    },
    methods:{
        enters(index) {
            $(".xxsj-content li").eq(index).css({"transform":"scale(1.11)"})
        },
        leaves(){
            $(".xxsj-content li").css({"transform":"scale(1)"})
        },
        enter(index){
         $(".xsjx-content li").eq(index).css({"transform":"scale(1.11)"})
        },
        leave(){
            $(".xsjx-content li").css({"transform":"scale(1)"})
        },
        gd(index){
         $(".gd-content li").eq(index).css({"transform":"scale(1.08)"})
        },
        gdout(){
            $(".gd-content li").css({"transform":"scale(1)"})
        },
        xd(index){
         $(".xd-content li").eq(index).css({"transform":"scale(1.08)"})
        },
        xdout(){
            $(".xd-content li").css({"transform":"scale(1)"})
        },
        xy(index){
         $(".xy-content li").eq(index).css({"transform":"scale(1.08)"})
        },
        xyout(){
            $(".xy-content li").css({"transform":"scale(1)"})
        },
        hx(index){
         $(".hx-content li").eq(index).css({"transform":"scale(1.08)"})
        },
        hxout(){
            $(".hx-content li").css({"transform":"scale(1)"})
        }
    }
}
</script>