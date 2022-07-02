<template>
    <div class="sell">
        <div class="sell-top">
            <img src="@/assets/images/YQ/钱币.png" alt="">
            <span>言情完结榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">本月</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">本季</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">年</span>
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
                <a href="">心动</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">【GB】擎刀寻美人</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in datas" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 本季 -->
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
                <a href="">小浪花</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">我们平平无奇</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in seven" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 年 -->
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
                <a href="">逆行</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">云开见明月</a>
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
                imgUrl:require('@/assets/images/YQ/把箭放下.jpg'),
                name :'把箭放下',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'入眠酒',
                brief:'捡到丘比特先不要急着扔'
            }],
            datas:[{
                names:'千秋岁'
            },{
                 names:'洛阳行'
            },{
                 names:'TIAMO'
            },{
                 names:'久溺'
            },{
                 names:'救命！总裁又换人设了'
            },{
                 names:'佳人归去兮'
            },{
                 names:'上钩'
            }],
             season:[{
                imgUrl:require('@/assets/images/YQ/小小.jpg'),
                name :'小小',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'烟叶',
                brief:'能扛得起摄像大机，也能写得出万丈柔情。'
            }],
            seven:[{
                names:'折善'
            },{
                 names:'启明星'
            },{
                 names:'光华'
            },{
                 names:'浮光'
            },{
                 names:'南极访客'
            },{
                 names:'基石'
            },{
                 names:'月光光'
            }],
            year:[{
                imgUrl:require('@/assets/images/YQ/小浪花.jpg'),
                name :'小浪花',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'鹿鹿魚魚',
                brief:'泡最靓的学神，做最浪的学霸'
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