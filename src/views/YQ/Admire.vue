<template>
    <div class="sell">
        <div class="sell-top">
            <img src="@/assets/images/YQ/赞赏.png" alt="">
            <span>言情赞赏榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">周</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">月</span>
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
                <a href="">万里蒙霜露</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">遇见你时</a>
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
                imgUrl:require('@/assets/images/YQ/我本娇蛮.jpeg'),
                name :'我本娇蛮',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'桐宿',
                brief:'娇蛮公主，一朝被她看不起的小崽子踩在脚下'
            }],
            datas:[{
                names:'TIAMO'
            },{
                 names:'洛阳行'
            },{
                 names:'南极访客'
            },{
                 names:'少喝毒鸡汤，会死'
            },{
                 names:'我和叶先生'
            },{
                 names:'众多非苅'
            },{
                 names:'云开见明月'
            }],
             season:[{
                imgUrl:require('@/assets/images/YQ/失明一千零一天.jpg'),
                name :'失明一千零一天',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'别承',
                brief:'那你的爱呢 也是施舍吗。'
            }],
            seven:[{
                names:'遇见你时'
            },{
                 names:'漫漫余生都是你'
            },{
                 names:'他是美好的代名词'
            },{
                 names:'众多非苅'
            },{
                 names:'云开见明月'
            },{
                 names:'光华'
            },{
                 names:'与你相识在梦境'
            }],
            year:[{
                imgUrl:require('@/assets/images/YQ/万里蒙露霜.jpg'),
                name :'万里蒙露霜',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'神秘岛小烟囱芮言',
                brief:'从小欺负到大的人真香啦！燕离霜×平湖露'
            }],
            third:[{
                names:'月光光'
            },{
                 names:'前任方程式'
            },{
                 names:'再忆香雪海'
            },{
                 names:'暮色狂奔'
            },{
                 names:'覆我'
            },{
                 names:'ai'
            },{
                 names:'浮光'
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