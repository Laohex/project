<template>
    <div class="ishot">
        <div class="ishot-top">
            <img src="@/assets/images/TR/星星.png" alt="">
            <span>热门作品</span>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in one" :key="index" @mouseenter="enter(index)" @mouseleave="leave()">
                        <a href="javascript:;">
                            <img :src="item.imgUrl">
                        </a>
                        <p class="name"><a href="javascript:;">{{item.name}}</a></p>
                        <p class="author">
                            <img :src="item.imgurl">
                            <a href="javascript:;">{{item.author}}</a>
                        </p>
                        <p class="brief">{{item.brief}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name :'hot',
    data:function(){
        return {
            one : [{
                imgUrl:require('@/assets/images/TR/伪装学渣.jpg'),
                name :'伪装学渣：许你一朝，俞然一生',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'折子柒',
                brief:'BTS八人向，无cp'
            },{
                imgUrl:require('@/assets/images/TR/太阴妃.jpg'),
                name :'太阴纪',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'无缰',
                brief:'先看简介 避免踩雷'
            },{
                imgUrl:require('@/assets/images/TR/斗罗之草.jpg'),
                name :'斗罗之草总很忙',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'一抹糖',
                brief:'叮～，您的小可爱已沉迷输出无法自拔。'
            },{
                imgUrl:require('@/assets/images/TR/BTS.jpg'),
                name :'[BTS]男主他貌美如花',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'浅沁儿',
                brief:'BTS八人向，无cp'
            },{
                imgUrl:require('@/assets/images/TR/综影视之.jpg'),
                name :'综影视之加油！男神碗里来',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'不想做咸鱼',
                brief:'综穿影视'
            },{
                imgUrl:require('@/assets/images/TR/博君一肖.jpg'),
                name :'［博君一肖］从相亲到相爱',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'鸢飞鱼跃录',
                brief:'警察啵与医生赞，现代轻松甜文，HE'
            },{
                imgUrl:require('@/assets/images/TR/魔道祖师.jpg'),
                name :'（魔道祖师）法器未来',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'我欲成仙',
                brief:'与江澄约战后，魏无羡发明了窥视未来的法器'
            },{
                imgUrl:require('@/assets/images/TR/倚天gl.jpg'),
                name :'倚天gl',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'经年荒芜',
                brief:'深情掌门俏郡主'
            },{
                imgUrl:require('@/assets/images/TR/音符.jpg'),
                name :'音符',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'瀑布',
                brief:'王晋x颜司卓。水千丞作品同人文。'
            },{
                imgUrl:require('@/assets/images/TR/斗罗同人.jpg'),
                name :'斗罗同人斗帝的日常',
                imgurl:require('@/assets/images/YQ/BZQT/作者.png'),
                author:'华上笙箫',
                brief:'想写萧炎和唐三的cp'
            }]
        }
    },
    methods:{
        enter(index){
            $(".content li").eq(index).css({"transform":"scale(1.1)"});
        },
        leave(){
            $(".content li").css({"transform":"scale(1)"});
        }
    }
}
</script>