<template>
    <div class="txt_and_top">
        <div class="txt_and_top_one">
            <img src="@/assets/images/星星.png" alt="">
            <span>本周强推</span>
        </div>
        <div class="txt_and_top_tow">
            <div v-for="(item,index) in data" :key="index">
                <span class="txt_and_top_tow_one">{{item.area}}</span>
                <a href="" class="txt_and_top_tow_tow">{{item.title}}</a>
                <a href="" class="txt_and_top_tow_three">{{item.author}}</a>
                <span class="txt_and_top_tow_four">{{item.sentence}}</span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default{
    name:"YC_ONE",
    data : function() {
        return {
            data:[{
                    area : '[综合]',
                    title : '扶鸾',
                    author : '白芥子',
                    sentence : '被杀妻证道后，他重生成前夫的续弦。'
                },{
                    area : '[架空]',
                    title : '可以吃兔兔',
                    author : 'KLBB',
                    sentence : '犬攻美受yyds'
                },{
                    area : '[综合]',
                    title : '妄为',
                    author : '毛球球',
                    sentence : '我想对你，肆意妄为'
                },{
                    area : '[小说]',
                    title : '把箭放下',
                    author : '入眠酒',
                    sentence : '捡到丘比特先不要急着扔'
                },{
                    area : '[都市]',
                    title : '煮夫',
                    author : '因之',
                    sentence : '❗️家庭煮夫惨遭凶残老婆酱酱酿酿❗️'
                }
            ]
        }
    }
}
</script>
