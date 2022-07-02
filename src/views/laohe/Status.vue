<template>
    <div class="heandfour">
           <div class="heand-nav">
                    <ul>
                        <li><a :class="{active : current == 'indexTQ'}" @click="current='indexTQ'">原创</a></li>
                        <li><a :class="{active : current == 'indexYQ'}" @click="current='indexYQ'">言情</a></li>
                        <li><a :class="{active : current == 'indexTR'}" @click="current='indexTR'">同人</a></li>
                        <li><a :class="{active : current == 'Summary'}" @click="current='Summary'">古代</a></li>
                        <li><a :class="{active : current == 'indexBNFH'}" @click="current='indexBNFH'">百年风华</a></li>
                    </ul>
            </div> 
        <component :is="current"></component>
    
    </div>
</template>
<script>
    import Summary from '@/views/laohe/Summary'//引入历史的总组件
    import indexBNFH from '@/views/bnfh/indexBNFH'

    export default{
        
//   props: {
//     msg: String
//   },
        name: 'status',
        data: function(){
            return {
                current: 'indexBNFH'//默认显示的页面
            }
    },
    components:{
        Summary,
        indexBNFH
    }
 }
</script>