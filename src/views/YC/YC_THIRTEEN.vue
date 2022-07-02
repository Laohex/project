<template>
    <div class="Original_bestseller_list_cenner" >
        <div class="toplist">
            <img src="@/assets/images/钱袋.png" alt="">
            <span class="tital">原创上架榜</span>
            <div class="tital_tab">
                <div><span @mouseenter="into" @mouseleave="outto" v-show="inone">昨日</span></div>
                <div><span @mouseenter="into1" @mouseleave="outto1" v-show="intow">7天</span></div>
            </div>
        </div>
        <!-- 分割线 -->
        <div v-show="inones" class="bottomlist">
            <div class="cennerlist" v-for="(item,index) in data" :key="index">
                <div class="leftlist">
                    <img class="towleft" :src="item.imgtow" alt="">
                     <img class="oneleft" :src="item.imgone" alt="">
                </div>
                <div class="rightlist">
                    <div class="rightone"><a href=""><span>{{item.bookname}}</span></a></div>
                    <div class="righttow"><img src="@/assets/images/钢笔.png" alt=""><a href="">{{item.author}}</a></div>
                    <div class="rightthree"><span>{{item.details}}</span></div>
                </div>
            </div>

            <div class="rankingone" v-for="(item,index) in data" :key="index">
                <div>2</div>
                <span>{{item.nametow}}</span>
            </div>
            <div class="rankingtow" v-for="(item,index) in data" :key="index">
                <div>3</div>
                <span>{{item.namethree}}</span>
            </div>

            <div class="rankingthree" v-for="(item,index) in datas" :key="index">
                <div>{{index+4}}</div>
                <span>{{item.namest}}</span>
            </div>
        </div>
<!-- {{index+2}} -->
<!--  -->
<!--  -->
        <div v-show="intowes" class="bottomlist">
            <div class="cennerlist" v-for="(item,index) in datatow" :key="index">
                <div class="leftlist">
                    <img class="towleft" :src="item.imgtow" alt="">
                     <img class="oneleft" :src="item.imgone" alt="">
                </div>
                <div class="rightlist">
                    <div class="rightone"><a href=""><span>{{item.bookname}}</span></a></div>
                    <div class="righttow"><img src="@/assets/images/钢笔.png" alt=""><a href="">{{item.author}}</a></div>
                    <div class="rightthree"><span>{{item.details}}</span></div>
                </div>
            </div>

            <div class="rankingone" v-for="(item,index) in datatow" :key="index">
                <div>2</div>
                <span>{{item.nametow}}</span>
            </div>
            <div class="rankingtow" v-for="(item,index) in datatow" :key="index">
                <div>3</div>
                <span>{{item.namethree}}</span>
            </div>

            <div class="rankingthree" v-for="(item,index) in datastow" :key="index">
                <div>{{index+4}}</div>
                <span>{{item.namest}}</span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'YC_TWELVW',
    data: function(){
            return {
                
                data:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/一念之私.png'),
                    bookname:"一念之私",
                    author:"回南雀",
                    details:"贪婪不是我的错，我只是生来如此",
                    nametow:"楚天以南",
                    namethree:"过电",
                }],
                datas:[{
                     namest:"传闻"
                },{
                    namest:"禁区"
                },{
                     namest:"入骨画魂"
                },{
                     namest:"巴甫洛夫的狗"
                },{
                     namest:"日落大道"
                },{
                     namest:"单向通行"
                },{
                     namest:"不驯"
                }],
// tow
                 datatow:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/野蛮成瘾.png'),
                    bookname:"野蛮成瘾",
                    author:"空聚",
                    details:"优雅和精致是宁悠的本能。他不喜欢没礼貌的人，更不能忍受野蛮行径。",
                    nametow:"过电",
                    namethree:"借吻",
                }],
                datastow:[{
                     namest:"煮夫"
                },{
                    namest:"传闻"
                },{
                     namest:"枯萎爱人"
                },{
                     namest:"结婚这件小事"
                },{
                     namest:"爱的缪斯"
                },{
                     namest:"纸飞机"
                },{
                     namest:"完美失控"
                }],


                inone:true,
                intow:true,
                inthree:true,
                inones:true,
                intowes:false,
                inthrees:false
            }
        },
    methods:{
        into(){
            this.inones=true;
            this.intowes=false;
            this.inthrees=false;
        },
        outto(){
            this.inones=true;
            this.intowes=false;
            this.inthrees=false;
        },
        into1(){
            this.inones=false;
            this.intowes=true;
            this.inthrees=false;
        },
        outto1(){
            this.inones=false;
            this.intowes=true;
            this.inthrees=false;
        },
        into2(){
            this.inones=false;
            this.intowes=false;
            this.inthrees=true;
        },
        outto2(){
            this.inones=false;
            this.intowes=false;
            this.inthrees=true;
        }
    }

}
</script>