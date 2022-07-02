<template>
    <div class="female">
        <div class="female-top">女性觉醒</div>
        <div class="female-bottom">
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
    name:'female',
    data:function(){
        return{
            datas:[{
                imgUrl:require('@/assets/images/wm.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'我们平平无奇',
                authods:'兔大王',
                content:'二十几岁的生活好烦'
            },
            {
                imgUrl:require('@/assets/images/zsn.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'再少年',
                authods:'毛球球',
                content:'你有群山巍峨，我有春风化雨'
            },
            {
                imgUrl:require('@/assets/images/xx.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'小小',
                authods:'烟叶',
                content:'能扛得起摄像大机，也能写得出万丈柔情。'
            },
            {
                imgUrl:require('@/assets/images/ndcq.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'你的城墙',
                authods:'白兰地',
                content:'我的肩膀，就是你的城墙'
            },
            {
                imgUrl:require('@/assets/images/gh.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'光华',
                authods:'梨斯坦',
                content:'相信你会成为最想成为的人'
            },
            {
                imgUrl:require('@/assets/images/cl.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'赤裸',
                authods:'好芋',
                content:'我赤裸，这就是这个故事的全部。'
            },
            {
                imgUrl:require('@/assets/images/mswy.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'暮色外衣',
                authods:'博尔赫叁',
                content:'我向空气，海洋和大地敬礼'
            },
            {
                imgUrl:require('@/assets/images/md.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'牡丹旗袍',
                authods:'风起鹿鸣',
                content:'【已完结】孙瑶瑶是这个世界上最美丽的女人'
            },
            {
                imgUrl:require('@/assets/images/ptnh.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'普通女孩',
                authods:'押花师',
                content:'新时代普通女孩的生活图鉴'
            }
            ]
        }
    }
}
</script>