<template>
    <div class="hot">
        <div class="hot-top">
            <img src="@/assets/images/fire.png"><span>人气榜</span> 
            <div class="hyh2">
                <span @mouseenter="move" @mouseleave="remove" v-show="one">7天</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="two">30天</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="three">总</span>
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
            <div class="hot-two">
                <span>2</span>
                <a href="">渡厄</a>
            </div>
            <div class="hot-three">
                    <span>3</span>
                    <a href="">督主有病</a>
            </div>
            <div class="hot-ranking" v-for="(item,index) in rank" :key="index">
                <span>{{item.rank}}</span>
                <a href="">{{item.Bname}}</a>
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
            <div class="hot-two">
                <span>2</span>
                <a href="">渡厄</a>
            </div>
            <div class="hot-three">
                    <span>3</span>
                    <a href="">烧雪</a>
            </div>
            <div class="hot-ranking" v-for="(item,index) in rank1" :key="index">
                <span>{{item.rank}}</span>
                <a href="">{{item.Bname}}</a>
            </div>
        </div>

        <div v-show="threes" class="hot-bottom">
            <div class="hot-bottom1">
                <ul>
                    <li v-for="(item,index) in data1" :key="index">
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
            <div class="hot-two">
                <span>2</span>
                <a href="">再世权臣</a>
            </div>
            <div class="hot-three">
                    <span>3</span>
                    <a href="">论如何错误地套路一个魔教教主</a>
            </div>
            <div class="hot-ranking" v-for="(item,index) in rank2" :key="index">
                <span>{{item.rank}}</span>
                <a href="">{{item.Bname}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'popularity',
    data:function(){
        return{
            
            datas:[{
                imgUrl:require('@/assets/images/fn.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'扶鸾',
                authods:'白芥子',
                content:'被杀妻证道后，他重生成前夫的续弦。'
            }
            ],
            data1:[{
                imgUrl:require('@/assets/images/dzyb.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'督主有病',
                authods:'杨溯',
                content:'他是别人的地狱，却是我的极乐。'
            }
            ],
            rank:[{
                rank:'4',
                Bname:'烧雪'
            },
            {
                rank:'5',
                Bname:'千堆雪'
            },
            {
                rank:'6',
                Bname:'再世权臣'
            },
            {
                rank:'7',
                Bname:'屠夫娶亲'
            },
            {
                rank:'8',
                Bname:'全天下都在等着朕废后'
            },
            {
                rank:'9',
                Bname:'孽徒，放开为师后颈！'
            },
            {
                rank:'10',
                Bname:'心上人来看我的坟头草'
            },
            ],

            rank1:[{
                rank:'4',
                Bname:'全天下都等着朕废后'
            },
            {
                rank:'5',
                Bname:'督主有病'
            },
            {
                rank:'6',
                Bname:'骄矜'
            },
            {
                rank:'7',
                Bname:'再世权臣'
            },
            {
                rank:'8',
                Bname:'将卿'
            },
            {
                rank:'9',
                Bname:'忘恩'
            },
            {
                rank:'10',
                Bname:'孽徒，放开为师后颈！'
            },
            ],

            rank2:[{
                rank:'4',
                Bname:'温香艳玉'
            },
            {
                rank:'5',
                Bname:'师弟还不杀我灭口'
            },
            {
                rank:'6',
                Bname:'心上人来看我的坟头草'
            },
            {
                rank:'7',
                Bname:'丹霞万里'
            },
            {
                rank:'8',
                Bname:'渡厄'
            },
            {
                rank:'9',
                Bname:'少帝他不想重生'
            },
            {
                rank:'10',
                Bname:'暗渡陈仓'
            },
            ],
            
            one:true,
            two:true,
            three:true,
            ones:true,
            twos:false,
            threes:false
        }
    },
    methods:{
        move(){
            this.ones=true;
            this.twos=false;
            this.threes=false;
        },
        remove(){
            this.ones=true;
            this.twos=false;
            this.threes=false;
        },
        move1(){
            this.ones=false;
            this.twos=true;
            this.threes=false;
        },
        remove1(){
            this.ones=false;
            this.twos=true;
            this.threes=false;
        },
        move2(){
            this.ones=false;
            this.twos=false;
            this.threes=true;
        },
        remove2(){
            this.ones=false;
            this.twos=false;
            this.threes=true;
        }
    }
}
</script>