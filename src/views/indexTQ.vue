<template>
  <div class="about">
     
    <div class="xjh">
           <div class="xjh_one">
                    <ul>
                        <li><a :class="{active : current == 'Cpbqb'}" @click="current='Cpbqb'">长佩表情包</a></li>
                        <li><a :class="{active : current == 'Dpbqb'}" @click="current='Dpbqb'">短佩表情包</a></li>
                        <li><a :class="{active : current == 'Qhybqb'}" @click="current='Qhybqb'">青花鱼表情包</a></li>
                        <li><a :class="{active : current == 'Essjq'}" @click="current='Essjq'">二十四节气</a></li>
                        <li><a :class="{active : current == 'Sexz'}" @click="current='Sexz'">十二星座</a></li>
                        <li><a :class="{active : current == 'Zczs'}" @click="current='Zczs'">支持赞赏</a></li>
                    </ul>
            </div> 
            <div>
                 <component :is="current"></component>
            </div>
       
    </div>
    </div>
</template>
<style>
@import '~@/assets/css/indexTQ.css';
</style>
<script>
    import Cpbqb from '@/views/TQ/Cpbqb'//引入原创的总组件
    import Dpbqb from '@/views/TQ/Dpbqb'//引入原创的总组件
    import Qhybqb from '@/views/TQ/Qhybqb'//引入原创的总组件
    import Essjq from '@/views/TQ/Essjq'//引入原创的总组件
    import Sexz from '@/views/TQ/Sexz'//引入原创的总组件
    import Zczs from '@/views/TQ/Zczs'

    
    export default{
        name: 'indexTQ',
        data: function(){
            return {
                current: 'Cpbqb'//默认显示原创
            }
    },
    components:{
        Cpbqb,
        Dpbqb,
        Qhybqb,
        Essjq,
        Sexz,
        Zczs
    }
 }
</script>
