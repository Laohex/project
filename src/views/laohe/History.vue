<template>
    <div class="history">
        <div class="history-top">
            <img src="@/assets/images/xx.png"><span>古代强推</span> 
            <div class="hyh">
                <img src="@/assets/images/hyh.png">
                <span>换一换</span>
            </div>
        </div>
        <div class="history-bottom">
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
                imgUrl:require('@/assets/images/jhk.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'江湖客',
                authods:'小狐狸菌',
                content:'不小心捡到个江湖魔头，睡了'
            },
            {
                imgUrl:require('@/assets/images/whx.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'望孤星',
                authods:'阿金宝',
                content:'双cp，主年下副年上，一起坎坷搞对象'
            },
            {
                imgUrl:require('@/assets/images/fg.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'反骨',
                authods:'誩水思迁',
                content:'腹黑疯批美人×白切黑小酷哥'
            },
            {
                imgUrl:require('@/assets/images/sjdch.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'岁事当长贺',
                authods:'耍花枪',
                content:'护犊子机关术师受x爱妻狂魔狠人年下攻'
            },
            {
                imgUrl:require('@/assets/images/xkly.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'相看两厌',
                authods:'瑜灵',
                content:'被我欺负的人后来成了我对象'
            },
            ]
        }
    }
}
</script>