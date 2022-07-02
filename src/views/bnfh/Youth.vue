<template>
    <div class="youth">
        <div class="female-top">无畏青春</div>
        <div class="youth-bottom">
            <ul>
                <li v-for="(item,index) in datas" :key="index">
                    <a>
                        <img :src="item.imgUrl">
                    </a>
                    <p class="name">{{item.name}}</p>
                    <p class="authods">
                        <img :src="item.imgurl">
                        {{item.authods}}
                    </p>
                    <p class="content">
                        {{item.content}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'youth',
    data:function(){
        return{
            datas:[{
                imgUrl:require('@/assets/images/mrdl.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'明日顶流',
                authods:'南北逐风',
                content:'我可是要成为最强技工的男人！'
            },
            {
                imgUrl:require('@/assets/images/nq.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'年轻的朋友来相会',
                authods:'淡窗',
                content:'80年代工业高潮 技校工人VS海龟精英'
            },
            {
                imgUrl:require('@/assets/images/fug.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'浮光',
                authods:'小妖',
                content:'他教我收余恨，免娇嗔，苦海回身，早悟兰因'
            },
            {
                imgUrl:require('@/assets/images/ygg.png'),
                imgurl:require('@/assets/images/gb.png'),
                name:'月光光',
                authods:'愁云伤疤',
                content:'我们的学校有盏弯弯明月'
            },
            {
                imgUrl:require('@/assets/images/js.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'基石',
                authods:'虚渺无瘾',
                content:'她是我留在这的唯二理由'
            },
            {
                imgUrl:require('@/assets/images/bj.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'并肩',
                authods:'经年离骚',
                content:'一起看星星闪耀'
            }
            ]
        }
    }
}
</script>