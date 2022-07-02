<template>
    <div class="heandfour">
           <div class="heand-nav">
                    <ul>
                        <li><a :class="{active : current == 'indexYC'}" @click="current='indexYC'">原创</a></li>
                        <li><a :class="{active : current == 'indexYQ'}" @click="current='indexYQ'">言情</a></li>
                        <li><a :class="{active : current == 'indexTR'}" @click="current='indexTR'">同人</a></li>
                        <li><a :class="{active : current == 'indexTQ'}" @click="current='indexTQ'">图区</a></li>
                        <li><a :class="{active : current == 'indexBNFH'}" @click="current='indexBNFH'">百年风华</a></li>
                    </ul>
            </div> 
        <component :is="current"></component>
    
    </div>
</template>
<script>
    import indexYC from '@/views/indexYC'//引入原创的总组件
    import indexYQ from '@/views/indexYQ'//引入原创的总组件
    import indexTR from '@/views/indexTR'//引入原创的总组件
    import indexTQ from '@/views/indexTQ'//引入原创的总组件
    import indexBNFH from '@/views/indexBNFH'//引入原创的总组件
    

    
    export default{
        
//   props: {
//     msg: String
//   },
        name: 'Nav',
        data: function(){
            return {
                current: 'indexYC'//默认显示原创
            }
    },
    data(){
        return{
            current : 'indexYC'
        }
    },
    components:{
        // Heand,
        // Tail,
        indexYC,
        indexYQ,
        indexTR,
        indexTQ,
        indexBNFH
    }
 }
</script>