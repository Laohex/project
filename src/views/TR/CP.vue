<template>
    <div class="TR-ranking">
        <div class="sell-top">
            <img src="@/assets/images/TR/火 (1).png" alt="">
            <span>CP榜</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">7天</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">30日</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">总</span>
            </div>
        </div>
        
        <div class="TR-rightl-content" v-show="rightle">
            <div class="content-1">
                <span>1</span>
                <a href="">忘羡</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">雷安</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">瓶邪</a>
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
                <a href="">雷安</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">忘羡</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">燃晚</a>
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
                <a href="">忘羡</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">瓶邪</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">朝俞</a>
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
                names:'朝俞'
            },{
                 names:'德哈'
            },{
                 names:'双玄'
            },{
                 names:'添望'
            },{
                 names:'燃晚'
            },{
                 names:'冰秋'
            },{
                 names:'冰久'
            }],
            seven:[{
                names:'瓶邪'
            },{
                 names:'朝俞'
            },{
                 names:'添望'
            },{
                 names:'双玄'
            },{
                 names:'德哈'
            },{
                 names:'花怜'
            },{
                 names:'冰久'
            }],
            third:[{
                names:'德哈'
            },{
                 names:'花怜'
            },{
                 names:'雷安'
            },{
                 names:'燃晚'
            },{
                 names:'冰秋'
            },{
                 names:'黑花'
            },{
                 names:'曦瑶'
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