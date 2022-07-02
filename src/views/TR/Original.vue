<template>
    <div class="TR-ranking">
        <div class="sell-top">
            <img src="@/assets/images/TR/火 (1).png" alt="">
            <span>原著榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">7天</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">30日</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">总</span>
            </div>
        </div>
        
        <div class="TR-rightl-content" v-show="rightle">
            <div class="content-1">
                <span>1</span>
                <a href="">剑网3</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">魔导师组</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">哈利波特</a>
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
                <a href="">原神</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">阴阳师</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">王者荣耀</a>
            </div>
            <div class="sell-rightl-content-4" v-for="(item,index) in seven" :key="index">
                <span>{{index+4}}</span>
                <a href="">{{item.names}}</a>
            </div>
        </div>


        <!-- 30天 -->
        <div class="TR-rightl-content" v-show="rightri">
            <div class="content-1">
                <span>1</span>
                <a href="">全职高手</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">剑网3</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">魔导师组</a>
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
    name:'mood',
    data:function(){
        return {
            datas:[{
                names:'王者荣耀'
            },{
                 names:'某某'
            },{
                 names:'文豪野犬'
            },{
                 names:'盗墓笔记'
            },{
                 names:'天宫赐福'
            },{
                 names:'咒术回战'
            },{
                 names:'凹凸世界'
            }],
            seven:[{
                names:'剑网3'
            },{
                 names:'魔导师组'
            },{
                 names:'哈利波特'
            },{
                 names:'咒回'
            },{
                 names:'188男团'
            },{
                 names:'盗墓笔记'
            },{
                 names:'文豪野犬'
            }],
            third:[{
                names:'漫威'
            },{
                 names:'阴阳师'
            },{
                 names:'哈利波特'
            },{
                 names:'王者荣耀'
            },{
                 names:'文豪野犬'
            },{
                 names:'盗墓笔记'
            },{
                 names:'斗罗大陆'
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