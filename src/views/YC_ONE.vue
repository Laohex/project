<template>
    <div class="classification_total">
        <div class="classification_total_one">
            <div class="classification_total_one_card">
                <a href="">
                     <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span></a>
                <a href="">
                    <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span>
                </a>
                <a href="">
                     <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span>
                </a>
                <a href="">
                     <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span>
                </a>
                <a @click="goin">
                     <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span>
                </a>


                <!-- <a v-for="(item,index) in data" :key="index"  >
                    <router-link to="/Summary" class="A" @click="Summary"> 
                        <i @click="show(item.shorthand)">
                            <img :src="item.imgurl" :title="item.name">
                        </i>
                        <span class="species">{{item.species}}</span>
                        <component :is="canner"></component>
                    </router-link>
                </a> -->
            </div>
        </div>
    </div>
</template>
<script>
import Summary from '@/views/Summary'

    export default {
        name:'YC_ONE',
        data:function(){
            return{
                data(){
                    return{
                        current : 'Summary'
                    }
                },

                methods:{
                    go(){
                        this.$router.push('/Summary')
                    }
                },

                // data : [{
                //     shorthand : 'gd',
                //     imgurl:require('@/assets/images/古代.png'),
                //     species : '古代',
                // },{
                //     imgurl:require('@/assets/images/现代.png'),
                //     species : '现代',
                // },{
                //     imgurl:require('@/assets/images/幻想.png'),
                //     species : '幻想',
                // },{
                //     imgurl:require('@/assets/images/悬疑.png'),
                //     species : '悬疑',
                // },{
                //     imgurl:require('@/assets/images/短佩.png'),
                //     species : '短佩',
                // },{
                //     imgurl:require('@/assets/images/架空.png'),
                //     species : '架空',
                // },{
                //     imgurl:require('@/assets/images/无cp.png'),
                //     species : '无CP',
                // },{
                //     imgurl:require('@/assets/images/百合.png'),
                //     species : '百合',
                // }
                // ],
                components : {
                    Summary
                }
            }
        },

    }
</script>

