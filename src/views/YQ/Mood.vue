<template>
    <div class="sell">
        <div class="sell-top">
            <img src="@/assets/images/YQ/火.png" alt="">
            <span>言情人气榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">7天</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">30日</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">总</span>
            </div>
        </div>
        
        <div class="sell-rightl-content" v-show="rightle">
            <div class="sell-rightl-content-1">
                <ul>
                    <li v-for="(item,index) in data" :key="index">
                        <span><img src="@/assets/images/YQ/1.png" alt=""></span>
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
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">ai</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">逆行</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in datas" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 7天 -->
        <div class="sell-rightl-content" v-show="rightce">
            <div class="sell-rightl-content-1">
                <ul>
                    <li v-for="(item,index) in season" :key="index">
                        <span><img src="@/assets/images/YQ/1.png" alt=""></span>
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
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">ai</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">逆行</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in seven" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 30天 -->
        <div class="sell-rightl-content" v-show="rightri">
            <div class="sell-rightl-content-1">
                <ul>
                    <li v-for="(item,index) in year" :key="index">
                        <span><img src="@/assets/images/YQ/1.png" alt=""></span>
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
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">凤台曲</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">一念之私</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in third" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>
        <div class="sell-all">
            <a href="">全部 ></a>
        </div>
    </div>

    

</template>

<script>
export default {
    name:'mood',
    data:function(){
        return {
            data:[{
                imgUrl:require('@/assets/images/YQ/上心.jpg'),
                name :'上心',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'池总渣',
                brief:'贪婪不是我的错，我只是生来如此'
            }],
            datas:[{
                names:'重回出道时'
            },{
                 names:'一念之私'
            },{
                 names:'普通女孩'
            },{
                 names:'美美'
            },{
                 names:'南极访客'
            },{
                 names:'小小'
            },{
                 names:'云开见明月'
            }],
            season:[{
                imgUrl:require('@/assets/images/YQ/BZQT/白日恋人.jpg'),
                name :'白日恋人',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'墨夜御',
                brief:'用一百天的游戏变成更好的自己'
            }],
            seven:[{
                names:'小浪花'
            },{
                 names:'云开见明月'
            },{
                 names:'一念之私'
            },{
                 names:'藏不住'
            },{
                 names:'重回出道时'
            },{
                 names:'普通女孩'
            },{
                 names:'前任方程式'
            }],
            year:[{
                imgUrl:require('@/assets/images/YQ/BZQT/普通女孩.jpg'),
                name :'普通女孩',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'押花师',
                brief:'新时代普通女孩的生活图鉴'
            }],
            third:[{
                names:'我本娇蛮'
            },{
                 names:'你爱天真我爱闹'
            },{
                 names:'逆行'
            },{
                 names:'烧心'
            },{
                 names:'重回出道时'
            },{
                 names:'美美'
            },{
                 names:'过电'
            }],
            rightl:true,
            rightc:true,
            rightr:true,
            rightle:true,
            rightce:false,
            rightri:false
        }
    },
    methods: {
        move(){
            this.rightle=true;
            this.rightce=false;
            this.rightri=false;
        },
        remove(){
            this.rightle=true;
            this.rightce=false;
            this.rightri=false;
        },
        move1(){
            this.rightle=false;
            this.rightce=true;
            this.rightri=false;
        },
        remove1(){
            this.rightle=false;
            this.rightce=true;
            this.rightri=false;
        },
        move2(){
            this.rightle=false;
            this.rightce=false;
            this.rightri=true;
        },
        remove2(){
            this.rightle=false;
            this.rightce=false;
            this.rightri=true;
        },
    }
}
</script>