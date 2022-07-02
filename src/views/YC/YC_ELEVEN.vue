<template>
    <div class="the_ancient">
        <div class="the_ancient_top">
            <div class="one"></div>
            <span class="tow">幻想</span>
            <span class="three">换一换</span>
             <img src="@/assets/images/换一换.png" alt="">
        </div>

        

        <div @mouseenter="into" @mouseleave="outto">
             <div class="the_ancient_details_top"  >
                <div v-if="on">
                    <div class="bottem">
                        <div class="left">
                            <img src="@/assets/images/走狗.png" alt="">
                        </div>
                        <div class="the_right">
                            <div class="the_one">
                                <span>走狗</span>
                            </div>
                            <div class="the_tow">
                                <img src="@/assets/images/钢笔.png" alt="">
                                <a href="">文盲土拨鼠</a>
                            </div>
                            <div class="the_three">
                                <span >他只想偷得一个心上人的吻。疯批X疯批</span>
                            </div>
                            <div class="the_four">
                                <div><a href="">科幻</a></div>
                                <div><a href="">年下</a></div>
                                <div><a href="">41.38万</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div v-if="outside">
                    <div class="top">
                        <a href="" class="left">走狗</a>
                        <a href="" class="right">文盲土拨鼠</a>
                    </div>
                </div>
                
            
            </div> 
<!-- 1 -->
            <div v-if="outside1">
                 <div class="the_ancient_details_top"  @mouseenter="enter" @mouseleave="leave">
                    
                    
                    <div class="bottem" v-show="seen">
                        <div class="left">
                            <img src="@/assets/images/赛博玫瑰.png" alt="">
                        </div>

                        <div class="the_right">
                            <div class="the_one">
                                <span>赛博玫瑰</span>
                            </div>
                            <div class="the_tow">
                                <img src="@/assets/images/钢笔.png" alt="">
                                <a href="">nightfall</a>
                            </div>
                            <div class="the_three">
                                <span >纯情仿生人在线分配</span>
                            </div>
                            <div class="the_four">
                                <div><a href="">科幻</a></div>
                                <div><a href="">强强</a></div>
                                <div><a href="">48.28万</a></div>
                            </div>
                        </div>
                    </div>        

                    <div class=" top" v-show="show">
                        <a href="" class="left">赛博玫瑰</a>
                        <a href="" class="right">nightfall</a>
                    </div>
                          
            </div> 
        <!-- no.3 -->
            <div class="the_ancient_details_top"  @mouseenter="out" @mouseleave="rever">
                <div class=" top" v-show="shows">
                    <a href="" class="left">囚犯改造计划</a>
                    <a href="" class="right">大魔王小鱼</a>
                </div>

                <div class="bottem" v-show="seens">
                    <div class="left">
                        <img src="@/assets/images/囚犯改造计划.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>囚犯改造计划</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">大魔王小鱼</a>
                        </div>
                        <div class="the_three">
                            <span >两个骗子的爱情故事</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">综合</a></div>
                            <div><a href="">强强</a></div>
                            <div><a href="">48.56万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

            </div>
<!-- 4 -->
        <div class="the_ancient_details_top"  @mouseenter="outs" @mouseleave="revers">
                <div class=" top" v-show="showss">
                    <a href="" class="left">欧洲魔法社会综合观察笔记CP</a>
                    <a href="" class="right">梨斯坦</a>
                </div>

                <div class="bottem" v-show="seenss">
                    <div class="left">
                        <img src="@/assets/images/欧洲魔法社会综合观察笔记CP.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>欧洲魔法社会综合观察笔记CP</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">梨斯坦</a>
                        </div>
                        <div class="the_three">
                            <span >我是来拿文凭的，你们咋个老想和我贪恋爱</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">综合</a></div>
                            <div><a href="">HE</a></div>
                            <div><a href="">21.39万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 


             <div class="the_ancient_details_top"  @mouseenter="outss" @mouseleave="reverss">
                <div class=" top" v-show="showsss">
                    <a href="" class="left">向夜色献吻</a>
                    <a href="" class="right">而苏</a>
                </div>

                <div class="bottem" v-show="seensss">
                    <div class="left">
                        <img src="@/assets/images/向夜色献吻.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>向夜色献吻</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">而苏</a>
                        </div>
                        <div class="the_three">
                            <span >被吸血鬼拯救后</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">奇幻</a></div>
                            <div><a href="">虐渣</a></div>
                            <div><a href="">5.87万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 




            <div class="the_ancient_details_top"  @mouseenter="out1" @mouseleave="rever1">
                <div class=" top" v-show="shows1">
                    <a href="" class="left">脑域边境</a>
                    <a href="" class="right">查有此人</a>
                </div>

                <div class="bottem" v-show="seens1">
                    <div class="left">
                        <img src="@/assets/images/脑域边境.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>脑域边境</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">查有此人</a>
                        </div>
                        <div class="the_three">
                            <span>有梦才能看见光</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">综合</a></div>
                            <div><a href="">强强</a></div>
                            <div><a href="">25.43万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

           

            <div class="the_ancient_details_top"  @mouseenter="out2" @mouseleave="rever2">
                <div class=" top" v-show="shows2">
                    <a href="" class="left">非正常室友关系</a>
                    <a href="" class="right">言午鱼</a>
                </div>

                <div class="bottem" v-show="seens2">
                    <div class="left">
                        <img src="@/assets/images/非正常室友关系.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>非正常室友关系</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">言午鱼</a>
                        </div>
                        <div class="the_three">
                            <span >半书信体，双重身份傲娇攻X努力上进天才受</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">奇幻</a></div>
                            <div><a href="">HE</a></div>
                            <div><a href="">12.15万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

            <div class="the_ancient_details_top"  @mouseenter="out3" @mouseleave="rever3">
                <div class=" top" v-show="shows3">
                    <a href="" class="left">唯怨永生</a>
                    <a href="" class="right">忙杀看花人</a>
                </div>

                <div class="bottem" v-show="seens3">
                    <div class="left">
                        <img src="@/assets/images/唯怨永生.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>唯怨永生</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">忙杀看花人</a>
                        </div>
                        <div class="the_three">
                            <span >在他的慈悲之中没有花园</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">奇幻</a></div>
                            <div><a href="">剧情</a></div>
                            <div><a href="">31.13万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 



        </div>








        <!-- no.1 -->
           
        <!-- no.2 -->
           
        <!-- no.4 -->
           

        <!-- no.5 -->
          
        <!-- no.6 -->
           
        <!-- no.7 -->
          
        <!-- no.8 -->
        
            <!-- 分割线 -->
    </div>
</template>

<script>
export default{
    name:"YC_TEN",
    data(){
        return{
                on:true,
                outside:false,
                outside1:true,

            // 分割线
                // show10:true,
                // seen10:false,



                show:true,
                seen:false,

                shows:true,
                seens:false,

                showss:true,
                seenss:false,

                showsss:true,
                seensss:false,
                
                shows1:true,
                seens1:false,

                shows2:true,
                seens2:false,

                shows3:true,
                seens3:false,
        }
    },
    methods:{
        into(){
            this.on=false;
            this.outside=true;
            this.outside1=true;
        },
        outto(){
            this.on=true;
            this.outside=false;
            this.outside1=true;
        },
        // enter1(){
        //     this.show=false;
        //     this.seen=true;
        // },
        // leave1(){
        //     this.show=true;
        //     this.seen=false;
        // },
        // enter3(){
        //     this.seen10=true;
        //     this.show10=true;
        // },
        // leave3(){
        //     this.seen10=true;
        //     this.show10=true;
        // },
// 

        enter(){
            this.show=false;
            this.seen=true;
        },
        leave(){
            this.show=true;
            this.seen=false;
        },
// 
        out(){
            this.shows=false;
            this.seens=true;
        },
        rever(){
            this.shows=true;
            this.seens=false;
        },
// s
        outs(){
            this.showss=false;
            this.seenss=true;
        },
        revers(){
            this.showss=true;
            this.seenss=false;
        },
// ss
        outss(){
            this.showsss=false;
            this.seensss=true;
        },
        reverss(){
            this.showsss=true;
            this.seensss=false;
        },
// 1
        out1(){
            this.shows1=false;
            this.seens1=true;
        },
        rever1(){
            this.shows1=true;
            this.seens1=false;
        },
// 2
        out2(){
            this.shows2=false;
            this.seens2=true;
        },
        rever2(){
            this.shows2=true;
            this.seens2=false;
        },
// 3
         out3(){
            this.shows3=false;
            this.seens3=true;
        },
        rever3(){
            this.shows3=true;
            this.seens3=false;
        },
    }
}
</script>
