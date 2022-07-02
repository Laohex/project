<template>
    <div class="TR-ranking">
        <div class="sell-top">
            <img src="@/assets/images/TR/火 (1).png" alt="">
            <span>人气排行</span>
        
            <div class="sell-right">
                <span @mouseenter="move" @mouseleave="remove" v-show="rightl">7天</span>
                <span @mouseenter="move1" @mouseleave="remove1" v-show="rightc">30日</span>
                <span @mouseenter="move2" @mouseleave="remove2" v-show="rightr">总</span>
            </div>
        </div>
        
        <div class="TR-rightl-content" v-show="rightle">
            <div class="content-1">
                <span>1</span>
                <a href="">无人救我（同人）</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">刺青</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">【忘羡】只要你！</a>
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
                <a href="">无人救我（同人）</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">【忘羡】只要你！</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">无人区</a>
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
                <a href="">太阴妃</a>
            </div>
            <div class="sell-rightl-content-2">
                <span>2</span>
                <a href="">斗罗之草总很忙</a>
            </div>
            <div class="sell-rightl-content-3">
                <span>3</span>
                <a href="">[BTS]男主他貌美如花</a>
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
                names:'音符'
            },{
                 names:'破云之夫夫有责'
            },{
                 names:'【HP德哈】完美世界的不完美恋人'
            },{
                 names:'无人区'
            },{
                 names:'伪装学渣：许你一朝，俞然一生'
            },{
                 names:'太阴妃'
            },{
                 names:'［博君一肖］从相亲到相爱'
            }],
            seven:[{
                names:'［博君一肖］从相亲到相爱'
            },{
                 names:'伪装学渣：许你一朝，俞然一生'
            },{
                 names:'音符'
            },{
                 names:'破云之夫夫有责'
            },{
                 names:'假如楚晚宁是Omega'
            },{
                 names:'【HP德哈】完美世界的不完美恋人'
            },{
                 names:'刺青'
            }],
            third:[{
                names:'伪装学渣：许你一朝，俞然一生'
            },{
                 names:'综影视之加油！男神碗里来'
            },{
                 names:'［博君一肖］从相亲到相爱'
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