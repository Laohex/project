<template>
    <div class="Original_bestseller_list" >
        <div class="toplist">
            <img src="@/assets/images/钱袋.png" alt="">
            <span class="tital">原创畅销榜</span>
            <div class="tital_tab">
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
                    imgtow:require('@/assets/images/严禁造谣.png'),
                    bookname:"严禁造谣",
                    author:"春意夏",
                    details:"拉郎CP火了半年，蒸煮终于见面   微博@茶咕咕明天就更新",
                    nametow:"人鱼陷落",
                    namethree:"可以吃兔兔",
                }],
                datas:[{
                     namest:"藏不住"
                },{
                    namest:"上心"
                },{
                     namest:"扶鸾"
                },{
                     namest:"为什么这种A也能有O"
                },{
                     namest:"妄为"
                },{
                     namest:"诟病"
                },{
                     namest:"不驯"
                }],
// tow
                 datatow:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/严禁造谣.png'),
                    bookname:"严禁造谣",
                    author:"春意夏",
                    details:"拉郎CP火了半年，蒸煮终于见面   微博@茶咕咕明天就更新",
                    nametow:"人鱼陷落",
                    namethree:"可以吃兔兔",
                }],
                datastow:[{
                     namest:"上心"
                },{
                    namest:"一念之私"
                },{
                     namest:"诟病"
                },{
                     namest:"藏不住"
                },{
                     namest:"扶鸾"
                },{
                     namest:"妄为"
                },{
                     namest:"为什么这种A也能有O"
                }],
// three
                 datathree:[{
                    imgone:require('@/assets/images/one.png'),
                    imgtow:require('@/assets/images/人鱼陷落.png'),
                    bookname:"人鱼陷落",
                    author:"麟潜",
                    details:"他住在洪都拉斯的海",
                    nametow:"上心",
                    namethree:"藏不住",
                }],
                datasthree:[{
                     namest:"严禁造谣"
                },{
                    namest:"一念之私"
                },{
                     namest:"虚情假意"
                },{
                     namest:"诟病"
                },{
                     namest:"可以吃兔兔"
                },{
                     namest:"扶鸾"
                },{
                     namest:"为什么这种A也能有O"
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