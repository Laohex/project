<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/images/nb.png"><span>新人榜</span>
            <div class="hyh6">
                <span @mouseenter="move" @mouseleave="remove" v-show="one">昨日</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="two">7天</span>
            </div>
        </div>
        <div v-show="ones" class="hot-bottom">
            <div class="hot-bottom1">
                <ul>
                    <li v-for="(item,index) in datas" :key="index">
                        <span><img src="@/assets/images/dy.png"></span>
                        <a>
                            <img :src="item.imgUrl">
                        </a>
                        <p class="name">{{item.name}}</p>
                        <p class="authods">
                            <img :src="item.imgurl">
                            {{item.authods}}
                        </p>
                        <p class="content">
                            {{item.content}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        <div v-show="twos" class="hot-bottom">
            <div class="hot-bottom1">
                <ul>
                    <li v-for="(item,index) in datas" :key="index">
                        <span><img src="@/assets/images/dy.png"></span>
                        <a>
                            <img :src="item.imgUrl">
                        </a>
                        <p class="name">{{item.name}}</p>
                        <p class="authods">
                            <img :src="item.imgurl">
                            {{item.authods}}
                        </p>
                        <p class="content">
                            {{item.content}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    name:'newpeople',
    data:function(){
        return{
            
            datas:[{
                imgUrl:require('@/assets/images/lt.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'兰亭',
                authods:'黄昏时遇见你',
                content:'我与他是知己，更是爱人。'
            }
            ],
            
            one:true,
            two:true,
            ones:true,
            twos:false
        }
    },
    methods:{
        move(){
            this.ones=true;
            this.twos=false;
        },
        remove(){
            this.ones=true;
            this.twos=false;
        },
        move1(){
            this.ones=false;
            this.twos=true;
        },
        remove1(){
            this.ones=false;
            this.twos=true;
        }
    }
}
</script>