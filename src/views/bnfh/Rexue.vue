<template>
    <div class="rexue">
        <div class="female-top">热血竞技</div>
        <div class="rexue-bottom">
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
    name:'rexue',
    data:function(){
        return{
            datas:[{
                imgUrl:require('@/assets/images/zx.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'执星为弈',
                authods:'鹿鹿魚魚',
                content:'三尺之局，布子罗星'
            },
            {
                imgUrl:require('@/assets/images/zf.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'逐风',
                authods:'江楼',
                content:'我来这儿，也是为了赢。 '
            },
            {
                imgUrl:require('@/assets/images/dmzr.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'对面之人',
                authods:'停云阁主',
                content:'梦不只有黑白的颜色。'
            }
            ]
        }
    }
}
</script>