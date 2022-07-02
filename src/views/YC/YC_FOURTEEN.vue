<template>
    <div class="Original_bestseller_list" >
        <div class="toplist">
            <img src="@/assets/images/钱袋.png" alt="">
            <span class="tital">原创风云榜</span>
            <div class="tital_tab" >
                <div><span @mouseenter="into" @mouseleave="outto" v-show="inone">昨日</span></div>
                <div><span @mouseenter="into1" @mouseleave="outto1" v-show="intow">7天</span></div>
                <div><span @mouseenter="into2" @mouseleave="outto2"  v-show="inthree">30天</span></div>
            </div>
        </div>



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

<!-- three -->

        <div v-show="inthrees" class="bottomlist">
           <div class="cennerlist" v-for="(item,index) in datathree" :key="index">
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

            <div class="rankingone" v-for="(item,index) in datathree" :key="index">
                <div>2</div>
                <span>{{item.nametow}}</span>
            </div>
            <div class="rankingtow" v-for="(item,index) in datathree" :key="index">
                <div>3</div>
                <span>{{item.namethree}}</span>
            </div>

            <div class="rankingthree" v-for="(item,index) in datasthree" :key="index">
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
                    imgtow:require('@/assets/images/在世权臣.png'),
                    bookname:"在世权臣",
                    author:"天谢",
                    details:"权臣之路，步步修罗场",
                    nametow:"鹌鹑",
                    namethree:"明日星程",
                }],
                datas:[{
                     namest:"日落大道"
                },{
                    namest:"流明之罪"
                },{
                     namest:"扶鸾"
                },{
                     namest:"纯真丑闻"
                },{
                     namest:"邪门的爱情出现了"
                },{
                     namest:"纸飞机"
                },{
                     namest:"烙仙"
                }],
// tow
                 datatow:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/过电.png'),
                    bookname:"过电",
                    author:"卡比丘",
                    details:"只有同情没喜欢，跟郁知年不来电",
                    nametow:"人鱼陷落",
                    namethree:"我的剑灵好像和我有仇",
                }],
                datastow:[{
                     namest:"怪物酒吧营业中"
                },{
                    namest:"欺世盗命"
                },{
                     namest:"诟病"
                },{
                     namest:"别慌，是科学！"
                },{
                     namest:"撞鬼"
                },{
                     namest:"妄为"
                },{
                     namest:"子夜恶行游戏"
                }],
// three
                 datathree:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/退休扶贫.png'),
                    bookname:"退休扶贫",
                    author:"韩骨",
                    details:"您好，了解一下逆天改命业务吗？",
                    nametow:"纸短情长",
                    namethree:"青澈月光",
                }],
                datasthree:[{
                     namest:"生物电"
                },{
                    namest:"求而不得"
                },{
                     namest:"偏安一隅"
                },{
                     namest:"经年不识酒沾唇"
                },{
                     namest:"空相"
                },{
                     namest:"扶鸾"
                },{
                     namest:"我有一座山"
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
        into(index){
            $(".tital_tab span").eq(index).css({"color":"orange"});
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