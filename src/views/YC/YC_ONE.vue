<template>
    <div class="classification_total">
        <div class="classification_total_one">
            <div class="classification_total_one_card">
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/古代.png">
                    </i>
                    <span>古代</span></a>
                <a @click="revert">
                    <i>
                        <img src="@/assets/images/现代.png">
                    </i>
                    <span>现代</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/幻想.png">
                    </i>
                    <span>幻想</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/悬疑.png">
                    </i>
                    <span>悬疑</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/短佩.png">
                    </i>
                    <span>短佩</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/架空.png">
                    </i>
                    <span>架空</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/无cp.png">
                    </i>
                    <span>无CP</span>
                </a>
                <a @click="revert">
                     <i>
                        <img src="@/assets/images/百合.png">
                    </i>
                    <span>百合</span>
                </a> 
            </div>
        </div>
    </div>
</template>
<script>
import Summary from '@/views/laohe/Summary'

    export default {
        name:'YC_ONE',
        methods:{
                 revert(){
                        this.$router.push({path:"Summary",name:"Summary"});         //'indexTQ'
                    }
        },
        components : {
                Summary
                },
        data:function(){
            return{
                data(){
                    return{
                        current : 'Summary'
                    }
                },
            }
        }

    }
</script>

