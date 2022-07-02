<template>
    <div class="update">
        <div class="wjqt-top">
            <span class="l"></span>
            <span>最近更新</span>
            <span class="go"><a href="">全部 ></a></span>
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
                type:'[综合]',
                name:'光下，你与我',
                author:'张树人',
                brief:'看吧，你还是拯救我了',
                chapter:'第1章',
                time:'刚刚'
            },{
                type:'[穿越]',
                name:'溯洄',
                author:'拾不未',
                brief:'道阻且长',
                chapter:'第43章',
                time:'8分钟前'
            },{
                type:'[穿越]',
                name:'深渊处的星星',
                author:'竹婉月',
                brief:'不是迟来的喜欢，只是迟来的告白',
                chapter:'第17章',
                time:'9分钟前'
            },{
                type:'[都市]',
                name:'阳光灿烂的味道',
                author:'青花鱼小熊',
                brief:'腹黑小公主李思华和女骑士程如梦的小故事',
                chapter:'第72章',
                time:'9分钟前'
            },{
                type:'[综合]',
                name:'你看，连风都在哄你开心',
                author:'君悦子安',
                brief:'故事的开头很平淡',
                chapter:'第9章 水晶片',
                time:'10分钟前'
            },{
                type:'[都市]',
                name:'不舍得说再见',
                author:'陆千寻',
                brief:'CPbe文',
                chapter:'第1章 他的日记',
                time:'10分钟前'
            },{
                type:'[青春]',
                name:'一见如故',
                author:'溯洄',
                brief:'青梅竹马，马甲文',
                chapter:'第2章 初遇谷琪萳',
                time:'14分钟前'
            },{
                type:'[青春]',
                name:'哑娘',
                author:'拾页',
                brief:'简城拾页小说系列',
                chapter:'第2章 初遇谷琪萳',
                time:'14分钟前'
            },{
                type:'[都市]',
                name:'瞎子传奇之寻找眼珠子',
                author:'越狱阿北',
                brief:'我亲爱的少年，我们来日方长。',
                chapter:'第3章',
                time:'15分钟前'
            },{
                type:'[都市]',
                name:'未亡人',
                author:'橘子没有汽水',
                brief:'愿每个人都能和自己所爱相伴终老.',
                chapter:'第8章',
                time:'16分钟前'
            },{
                type:'[综合]',
                name:'《向阳》',
                author:'是阿涵',
                brief:'他说了 要陪她看烟花。',
                chapter:'第1章 初识',
                time:'16分钟前'
            },{
                type:'[青春]',
                name:'有个位置，只属于你',
                author:'掰掰涵',
                brief:'“吊毛别撅嘴在撅也没有用”但又把名字划了',
                chapter:'第2章鸭子嘴',
                time:'18分钟前'
            },{
                type:'[都市]',
                name:'你的喜欢',
                author:'只了个吱',
                brief:'一篇短文',
                chapter:'第1章',
                time:'22分钟前'
            },{
                type:'[江湖]',
                name:'逢生三昧',
                author:'植被警官',
                brief:'长亭短亭又一程 归路总向晚',
                chapter:'第1章 天火（1）',
                time:'25分钟前'
            },{
                type:'[青春]',
                name:'陪你看星辰和日落',
                author:'慕九安',
                brief:'“小落，你信我还是营销号” “信你”',
                chapter:'第1章怎么会那么巧',
                time:'30分钟前'
            },{
                type:'[玄幻]',
                name:'锦绣嫡妃',
                author:'舒花君',
                brief:'阿月，我来寻你了',
                chapter:'第4章：家的温暖',
                time:'34分钟前'
            },{
                type:'[综合]',
                name:'君慕婉',
                author:'夙歌',
                brief:'一位和亲公主远嫁他国的爱情故事',
                chapter:'第5章 夜谈',
                time:'40分钟前'
            },{
                type:'[民国]',
                name:'姹紫嫣红，良辰美景奈何',
                author:'牛奶拌凉菜',
                brief:'原来啊姹紫嫣红开遍，良辰美景奈何天啊',
                chapter:'第4章魏凌嫣进785师',
                time:'53分钟前'
            },{
                type:'[都市]',
                name:'阳光灿烂的味道',
                author:'青花鱼小熊',
                brief:'腹黑小公主李思华和女骑士程如梦的小故事',
                chapter:'第72章',
                time:'1小时前'
            },{
                type:'[综合]',
                name:'她是我心中的一道疤',
                author:'书虾',
                brief:'“阿姐,是我的阿姐”',
                chapter:'第1章',
                time:'2小时前'
            }]
        }
    }
}
</script>