<template>
    <div class="and_the_end_krypton_gold">
        <div class="and_the_end_krypton_gold_one">
            <img src="@/assets/images/打勾.png" alt="">
            <span>完结好文，尽情氪金</span>
        </div>
        <div class="and_the_end_krypton_gold_tow">
            <div v-for="(item,index) in date" :key="index">
                <a href="" class="left">{{ item.left }}</a>
                <a href="" class="right">{{ item.right }}</a>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                date:[{
                    left:"藏不住",
                    right:"陈隐"
                },{
                    left:"严禁造谣",
                    right:"春意夏"
                },{
                    left:"野蛮成瘾",
                    right:"空菊"
                },{
                    left:"恐怖游戏活BUG竟是我自己",
                    right:"荒木泽代"
                },{
                    left:"放开我弟，冲我来",
                    right:"快递小咕"
                },{
                    left:"蝴蝶效应",
                    right:"青山埋白骨"
                },{
                    left:"黑渊",
                    right:"你爸爸"
                },{
                    left:"余所事",
                    right:"仙菘蓝"
                },{
                    left:"社畜每天都在被迫营业",
                    right:"撒撒"
                },{
                    left:"我真的已经不喜欢你了",
                    right:"Dusty G"
                },
                ]
            }
        }
}
</script>
