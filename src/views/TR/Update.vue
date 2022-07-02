<template>
    <div class="update">
        <div class="wjqt-top">
            <span class="l"></span>
            <span>最近更新</span>
            <span class="go"><a href="">More ></a></span>
        </div>
        <div class="text">
            <p class="text-top">
                <span class="type">类型</span>
                <span class="name">作品名称</span>
                <span class="author">作者</span>
                <span class="brief">简介</span>
                <span class="chapter">最新章节</span>
                <span class="time">更新时间</span>
            </p>
            <ul v-for="(item,index) in text1" :key="index">
                <li>
                    <p class="text1">
                        <span class="type">{{item.type}}</span>
                        <span class="name"><a href="">{{item.name}}</a></span>
                        <span class="author">{{item.author}}</span>
                        <span class="brief">{{item.brief}}</span>
                        <span class="chapter"><a href="">{{item.chapter}}</a></span>
                        <span class="time">{{item.time}}</span>
                    </p>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'update',
    data:function(){
        return {
            text1 : [{
                type:'[文学]',
                name:'【盗笔】我和吴家的二三事',
                author:'半妖巫神',
                brief:'对不起，我是卧底，双面的',
                chapter:'第92章 归（下）',
                time:'42分钟前'
            },{
                type:'[国产]',
                name:'原神同人文',
                author:'霞木归栀',
                brief:'公钟 云秋 枭羽 魈空',
                chapter:'第3章',
                time:'52分钟前'
            },{
                type:'[其他]',
                name:'穿越到秦朝与嬴政谈个恋爱',
                author:'茶墨泼香',
                brief:'考古学家穿越到秦朝和嬴政打打闹闹谈谈恋爱',
                chapter:'第41章 你认为是泼脏水?',
                time:'58分钟前'
            },{
                type:'[文学]',
                name:'再次相遇',
                author:'狸猫午后',
                brief:'无',
                chapter:'第1章',
                time:'1小时前'
            },{
                type:'[文学]',
                name:'【陆林】将军早卸甲',
                author:'琪鹿',
                brief:'《残次品》同人文，cp：陆必行X林静恒',
                chapter:'第27章',
                time:'1 小时前'
            },{
                type:'[综合]',
                name:'【信白】龙君和他的小狐狸',
                author:'一只喵喵酱',
                brief:'禁转 禁二传 所有作品不授权',
                chapter:'关于藏宝',
                time:'1 小时前'
            },{
                type:'[文学]',
                name:'当世界一片混乱',
                author:'泠时',
                brief:'当魔道天官渣反and so on穿到一起',
                chapter:'会议进行中',
                time:'2 小时前'
            },{
                type:'[文学]',
                name:'【文轩】余生，你有我啊',
                author:'小望夏',
                brief:'第一次尝试古风，写的不好多多见谅',
                chapter:'第27章',
                time:'2 小时前'
            },{
                type:'[文学]',
                name:'不存在的人',
                author:'蓝褶',
                brief:'续写意难平',
                chapter:'第1章',
                time:'3 小时前'
            },{
                type:'[国产]',
                name:'野*',
                author:'阿魚',
                brief:'。',
                chapter:'第1章',
                time:'3 小时前'
            },{
                type:'[国产]',
                name:'妄',
                author:'旧岛罚夜',
                brief:'融于黑暗，然后创造光明',
                chapter:'No.17',
                time:'4 小时前'
            },{
                type:'[国产]',
                name:'雾都玫瑰',
                author:'藏圆',
                brief:'第1次写文 希望不要喷我',
                chapter:'回忆',
                time:'4 小时前'
            },{
                type:'[综合]',
                name:'山北恋爱纪实（不是）',
                author:'鱼不见月',
                brief:'xql的暧昧期和热恋期还有一些玩梗',
                chapter:'xql鬼屋记事',
                time:'4 小时前'
            },{
                type:'[国产]',
                name:'断线',
                author:'mziki',
                brief:'你这辈子做尽了英雄',
                chapter:'第1章',
                time:'4 小时前'
            },{
                type:'[日韩]',
                name:'[鬼灭]在鬼杀队混吃等死',
                author:'阿壶壶',
                brief:'别人当柱，我当社畜',
                chapter:'十六只蝉',
                time:'5 小时前'
            },{
                type:'[日韩]',
                name:'【格利】势均力敌',
                author:'执白不直白',
                brief:'伪白莲真腹黑女王受X正直古板面瘫攻',
                chapter:'第14章 鸟的去向（完）',
                time:'5 小时前'
            },{
                type:'[日韩]',
                name:'[五夏]',
                author:'捡破烂的小红帽',
                brief:'一些关于五夏的小脑洞',
                chapter:'错乱的是时间，而不是爱...',
                time:'5 小时前'
            },{
                type:'[综合]',
                name:'南湘日记',
                author:'长北',
                brief:'我可以说很多遍我爱你，因为你永远听不到',
                chapter:'第3章',
                time:'5 小时前'
            },{
                type:'[其他]',
                name:'他（他）们的故事',
                author:'御黎',
                brief:'本文是各种双男甜文哦',
                chapter:'第10章 溯阳篇：日久生情',
                time:'6 小时前'
            },{
                type:'[国产]',
                name:'《学业有成的羡羡重生了》',
                author:'荣木采采',
                brief:'第一世的羡在学业有成后重生改名，改事业',
                chapter:'第105章',
                time:'6 小时前'
            }]
        }
    }
}
</script>