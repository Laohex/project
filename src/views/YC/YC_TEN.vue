<template>
    <div class="the_ancient">
        <div class="the_ancient_top">
            <div class="one"></div>
            <span class="tow">古代</span>
            <span class="three">换一换</span>
             <img src="@/assets/images/换一换.png" alt="">
        </div>

        

        <div @mouseenter="into" @mouseleave="outto">
             <div class="the_ancient_details_top"  >
                <div v-if="on">
                    <div class="bottem">
                        <div class="left">
                            <img src="@/assets/images/清嘉录.png" alt="">
                        </div>
                        <div class="the_right">
                            <div class="the_one">
                                <span>清嘉录</span>
                            </div>
                            <div class="the_tow">
                                <img src="@/assets/images/钢笔.png" alt="">
                                <a href="">太子姑娘</a>
                            </div>
                            <div class="the_three">
                                <span >文臣攻 x 帝王受 （强强，年下）</span>
                            </div>
                            <div class="the_four">
                                <div><a href="" style="width:'100px'">宫廷</a></div>
                                <div><a href="">年下</a></div>
                                <div><a href="">46.38万</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div v-if="outside">
                    <div class="top">
                        <a href="" class="left">清嘉录</a>
                        <a href="" class="right">太子姑娘</a>
                    </div>
                </div>
                
            
            </div> 
<!-- 1 -->
            <div v-if="outside1">
                 <div class="the_ancient_details_top"  @mouseenter="enter" @mouseleave="leave">
                    
                    
                    <div class="bottem" v-show="seen">
                        <div class="left">
                            <img src="@/assets/images/君主.png" alt="">
                        </div>

                        <div class="the_right">
                            <div class="the_one">
                                <span>君主</span>
                            </div>
                            <div class="the_tow">
                                <img src="@/assets/images/钢笔.png" alt="">
                                <a href="">Bucephalus</a>
                            </div>
                            <div class="the_three">
                                <span >与历史上姐姐的男朋友HE了</span>
                            </div>
                            <div class="the_four">
                                <div><a href="">宫廷</a></div>
                                <div><a href="">年下</a></div>
                                <div><a href="">46.38万</a></div>
                            </div>
                        </div>
                    </div>        

                    <div class=" top" v-show="show">
                        <a href="" class="left">君主</a>
                        <a href="" class="right">Bucephalus</a>
                    </div>
                          
            </div> 
        <!-- no.3 -->
            <div class="the_ancient_details_top"  @mouseenter="out" @mouseleave="rever">
                <div class=" top" v-show="shows">
                    <a href="" class="left">全天下都等着朕废后</a>
                    <a href="" class="right">风露沁酒</a>
                </div>

                <div class="bottem" v-show="seens">
                    <div class="left">
                        <img src="@/assets/images/全天下都等着朕废后.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>全天下都等着朕废后</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">风露沁酒</a>
                        </div>
                        <div class="the_three">
                            <span >结婚第一天就丧偶</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">相爱相杀</a></div>
                            <div><a href="">17.26万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

            </div>
<!-- 4 -->
        <div class="the_ancient_details_top"  @mouseenter="outs" @mouseleave="revers">
                <div class=" top" v-show="showss">
                    <a href="" class="left">孽徒，放开为师后颈！</a>
                    <a href="" class="right">乌尔比诺</a>
                </div>

                <div class="bottem" v-show="seenss">
                    <div class="left">
                        <img src="@/assets/images/孽徒，放开为师后颈！.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>孽徒，放开为师后颈！</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">乌尔比诺</a>
                        </div>
                        <div class="the_three">
                            <span >先生要做天下臣，也是本王掌中雀心心上人</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">相爱相杀</a></div>
                            <div><a href="">19.87万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 


             <div class="the_ancient_details_top"  @mouseenter="outss" @mouseleave="reverss">
                <div class=" top" v-show="showsss">
                    <a href="" class="left">雾瑜</a>
                    <a href="" class="right">羡凡</a>
                </div>

                <div class="bottem" v-show="seensss">
                    <div class="left">
                        <img src="@/assets/images/雾瑜.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>雾瑜</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">羡凡</a>
                        </div>
                        <div class="the_three">
                            <span >踏破“盛世”，他便是我的少年将军</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">强强</a></div>
                            <div><a href="">25.18万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 




            <div class="the_ancient_details_top"  @mouseenter="out1" @mouseleave="rever1">
                <div class=" top" v-show="shows1">
                    <a href="" class="left">凤栖梧</a>
                    <a href="" class="right">赵小娘子</a>
                </div>

                <div class="bottem" v-show="seens1">
                    <div class="left">
                        <img src="@/assets/images/凤栖梧.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>凤栖梧</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">赵小娘子</a>
                        </div>
                        <div class="the_three">
                            <span >待我重整山河，许你一世安然</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">强强</a></div>
                            <div><a href="">13.00万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

           

            <div class="the_ancient_details_top"  @mouseenter="out2" @mouseleave="rever2">
                <div class=" top" v-show="shows2">
                    <a href="" class="left">驭龙符</a>
                    <a href="" class="right">洛伊一</a>
                </div>

                <div class="bottem" v-show="seens2">
                    <div class="left">
                        <img src="@/assets/images/驭龙符.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>驭龙符</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">洛伊一</a>
                        </div>
                        <div class="the_three">
                            <span >治朝堂内乱，平江湖之争</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">剧情</a></div>
                            <div><a href="">19.49万</a></div>
                        </div>
                    </div>
                </div>              
            </div> 

            <div class="the_ancient_details_top"  @mouseenter="out3" @mouseleave="rever3">
                <div class=" top" v-show="shows3">
                    <a href="" class="left">笼中雀</a>
                    <a href="" class="right">长街当歌</a>
                </div>

                <div class="bottem" v-show="seens3">
                    <div class="left">
                        <img src="@/assets/images/笼中雀.png" alt="">
                    </div>

                    <div class="the_right">
                        <div class="the_one">
                            <span>笼中雀</span>
                        </div>
                        <div class="the_tow">
                            <img src="@/assets/images/钢笔.png" alt="">
                            <a href="">长街当歌</a>
                        </div>
                        <div class="the_three">
                            <span >世子不做人，骗吃骗喝还骗心</span>
                        </div>
                        <div class="the_four">
                            <div><a href="">宫廷</a></div>
                            <div><a href="">HE</a></div>
                            <div><a href="">12.81万</a></div>
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
