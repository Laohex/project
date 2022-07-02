<template>
    <div class="TR-ranking">
        <div class="sell-top">
            <img src="@/assets/images/TR/文章赞赏.png" alt="">
            <span>赞赏榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">周</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">月</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">总</span>
            </div>
        </div>
        
        <div class="TR-rightl-content" v-show="rightle">
            <div class="content-1">
                <span>1</span>
                <a href="">往事</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">秋·张</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">南湘日记</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in datas" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 7天 -->
        <div class="TR-rightl-content" v-show="rightce">
            <div class="content-1">
                <span>1</span>
                <a href="">往事</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">太阴妃</a>
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


        <div class="TR-rightl-content" v-show="rightri">
            <div class="content-1">
                <span>1</span>
                <a href="">太阴妃</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">秋·张</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">言宝</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in third" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>
    </div>

    

</template>

<script>
export default {
    name:'sell',
    data:function(){
        return {
            datas:[{
                names:'HP德哈】完美世界的不完美恋人'
            },{
                 names:'斗破苍穹之息事宁人'
            },{
                 names:'【冰九】魔心（渣反同人）'
            },{
                 names:'向阳'
            },{
                 names:'【忘羡】情深，唯你！'
            },{
                 names:'十八那年误穿红楼'
            },{
                 names:'【hp】少女的祈愿'
            }],
            seven:[{
                names:'遇见你时'
            },{
                 names:'漫漫余生都是你'
            },{
                 names:'雪花神剑BG—天不绝人愿，故使'
            },{
                 names:'众多非苅'
            },{
                 names:'云开见明月'
            },{
                 names:'光华'
            },{
                 names:'与你相识在梦境'
            }],
            third:[{
                names:'月光光'
            },{
                 names:'【冰九】魔心（渣反同人）'
            },{
                 names:'再忆香雪海'
            },{
                 names:'暮色狂奔'
            },{
                 names:'覆我'
            },{
                 names:'雪花神剑——寒樱枝白'
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