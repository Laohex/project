<template>
    <div class="part">
        <div class="part-top">
            <img src="@/assets/images/dg.png"><span>分类精选</span> 
        </div>
        <div class="part-bottom">
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
    name:'history',
    data:function(){
        return{
            datas:[{
                imgUrl:require('@/assets/images/qdx.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'千堆雪',
                authods:'何辜风情',
                content:'人格分裂患者的康复治疗'
            },
            {
                imgUrl:require('@/assets/images/rw.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'汝闻之，人言否？',
                authods:'山寒',
                content:'谈恋爱请用人话沟通'
            },
            {
                imgUrl:require('@/assets/images/zfg.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'朕复国有望了',
                authods:'万宝乔',
                content:'偏执深情攻X假心机真软甜美人受'
            },
            {
                imgUrl:require('@/assets/images/byws.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'必有我师',
                authods:'城西走马',
                content:'等我长高就宰了你'
            },
            {
                imgUrl:require('@/assets/images/xq.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'寻棋',
                authods:'画罗衣',
                content:'不正经疯批攻×骨子里也挺疯受'
            },
            {
                imgUrl:require('@/assets/images/zl.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'浊流',
                authods:'愁雨山人',
                content:'孟安的心永远向着少爷。'
            }
            ]
        }
    }
}
</script>