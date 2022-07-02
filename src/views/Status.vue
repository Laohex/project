<template>
    <div class="heandfour">
           <div class="heand-nav">
                    <ul>
                        <li><a :class="{active : current == 'indexYC'}" @click="current='indexYC'">原创</a></li>
                        <li><a :class="{active : current == 'indexYQ'}" @click="current='indexYQ'">言情</a></li>
                        <li><a :class="{active : current == 'indexTR'}" @click="current='indexTR'">同人</a></li>
                        <li><a :class="{active : current == 'indexTQ'}" @click="current='indexTQ'">图区</a></li>
                        <li><a :class="{active : current == 'indexBNFH'}" @click="current='indexBNFH'">百年风华</a></li>
                        <li><a :class="{active : current == 'Community'}" @click="current='Community'">社区</a></li>
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
    import indexBNFH from '@/views/bnfh/indexBNFH'//引入原创的总组件
    import Community from '@/views/Community'

    
    export default{
        name: 'Status',
        data: function(){
            return {
                current: 'indexYC'//默认显示原创
            }
    },
    components:{
        // Heand,
        // Tail,
        indexYC,
        indexYQ,
        indexTR,
        indexTQ,
        indexBNFH,
        Community
    }
 }
</script>