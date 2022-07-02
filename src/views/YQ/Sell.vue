<template>
    <div class="sell">
        <div class="sell-top">
            <img src="@/assets/images/YQ/钱袋.png" alt="">
            <span>言情畅销榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">昨日</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">7天</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">30日</span>
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
                <a href="">无盐为后</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">覆我</a>
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
                <a href="">无盐为后</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">美美</a>
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
                <a href="">无盐为后</a>
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
    name:'sell',
    data:function(){
        return {
            data:[{
                imgUrl:require('@/assets/images/YQ/穿书后.jpg'),
                name :'穿书后我连女配都不是',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'大桥',
                brief:'不服就干'
            }],
            datas:[{
                names:'一念之私'
            },{
                 names:'重回出道时'
            },{
                 names:'前任方程式'
            },{
                 names:'美美'
            },{
                 names:'欲出樊笼'
            },{
                 names:'严禁造谣'
            },{
                 names:'藏不住'
            }],
            season:[{
                imgUrl:require('@/assets/images/YQ/重回出道时.jpg'),
                name :'重回出道时',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'兔大王',
                brief:'糟糠女明星重生奋斗史'
            }],
            seven:[{
                names:'我给将军刷三观'
            },{
                 names:'严禁造谣'
            },{
                 names:'一念之私'
            },{
                 names:'藏不住'
            },{
                 names:'覆我'
            },{
                 names:'欲出樊笼'
            },{
                 names:'前任方程式'
            }],
            year:[{
                imgUrl:require('@/assets/images/YQ/Classify/病名缺爱.jpg'),
                name :'病名缺爱',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'小妖',
                brief:'我要你盲目而苛刻地爱我'
            }],
            third:[{
                names:'重回出道时'
            },{
                 names:'美美'
            },{
                 names:'我给将军刷三观'
            },{
                 names:'前任方程式'
            },{
                 names:'欲出樊笼'
            },{
                 names:'藏不住'
            },{
                 names:'严禁造谣'
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