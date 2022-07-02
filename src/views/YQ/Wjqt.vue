<template>
    <div class="wjqt">
        <div class="wjqt-top">
                <img src="@/assets/images/YQ/钻石.png" alt="">
                <span>完结强推</span>
        </div>
        <div class="wjqtleft">
            <ul>
                <li v-for="(item,index) in data" :key="index">
                    <p>
                        <span class="type">{{item.type}}</span>
                        <span class="name"><a href="">{{item.name}}</a></span>
                        <span class="author"><a href="">{{item.author}}</a></span>
                        <span class="brief">{{item.brief}}</span>
                    </p>
                </li>
            </ul>
        </div>

        <div class="wjqtleft">
            <ul>
                <li v-for="(item,index) in datas" :key="index">
                    <p>
                        <span class="type">{{item.type}}</span>
                        <span class="name"><a href="">{{item.name}}</a></span>
                        <span class="author"><a href="">{{item.author}}</a></span>
                        <span class="brief">{{item.brief}}</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name : 'wjqt',
    data:function(){
        return {
            data:[{
                type:'[宫廷]',
                name : '覆我',
                author : '摊摊',
                brief : '我知道所有的一切都不重要，你才是我的珍宝'
            },{
                type:'[都市]',
                name : '暮色外衣',
                author : '博尔赫叁',
                brief : '我向空气，海洋和大地敬礼'
            },{
                type:'[青春]',
                name : '甜茶去冰十分糖',
                author : '相与步于中庭',
                brief : '全服追杀的小萌新被冷酷大神强制收走'
            },{
                type:'[都市]',
                name : '相亲对象他平平无奇',
                author : '兔大王',
                brief : '相亲对象竟然蛮有趣的'
            }],
            
            datas:[{
                type:'[青春]',
                name : '穿书后我连女配都不是',
                author : '大桥',
                brief : '不服就干'
            },{
                type:'[都市]',
                name : '逆行',
                author : '池总渣',
                brief : '禁欲消防员x妖艳女摄影'
            },{
                type:'[都市]',
                name : '再忆香雪海',
                author : 'ranana',
                brief : '相岑宝楼好赌，随身总是带着两副扑克牌。'
            },{
                type:'[都市]',
                name : '后来',
                author : '青小雨',
                brief : '谢谢你一直在。'
            }]
        }
    }
}
</script>
