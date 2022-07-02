<template>
    <div class="heandfour_tow">
           <div class="heand-nav_tow">
                    <ul>
                        <li><a :class="{active : current == 'indexYC'}" @click="current='indexYC'">古代</a></li>
                        <li><a :class="{active : current == 'indexYQ'}" @click="current='indexYQ'">现代</a></li>
                        <li><a :class="{active : current == 'indexTR'}" @click="current='indexTR'">幻想</a></li>
                        <li><a :class="{active : current == 'indexTQ'}" @click="current='indexTQ'">悬疑</a></li>
                        <li><a :class="{active : current == 'indexBNFH'}" @click="current='indexBNFH'">短佩</a></li>
                        <li><a :class="{active : current == 'Summary'}" @click="current='Summary'">架空</a></li>
                        <li><a :class="{active : current == 'one'}" @click="current='one'">无CP</a></li>
                        <li><a :class="{active : current == 'tow'}" @click="current='tow'">百合</a></li>
                    </ul>
            </div> 
    </div>
</template>
<script>
    import indexYC from '@/views/indexYC'//引入原创的总组件
    import indexYQ from '@/views/indexYQ'//引入原创的总组件
    import indexTR from '@/views/indexTR'//引入原创的总组件
    import indexTQ from '@/views/indexTQ'//引入原创的总组件
    import indexBNFH from '@/views/indexBNFH'//引入原创的总组件
        import Summary from '@/views/Summary'
    

    
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
        Summary
    }
 }
</script>