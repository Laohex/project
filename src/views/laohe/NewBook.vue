<template>
    <div class="part">
        <div class="part-top">
            <img src="@/assets/images/nb.png"><span>新书速递</span> 
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
                imgUrl:require('@/assets/images/dfzj.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'登峰造极',
                authods:'淡窗',
                content:'攻害死受全家，却只留下他'
            },
            {
                imgUrl:require('@/assets/images/mm.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'茫茫',
                authods:'醉千秋',
                content:'重生之后，我成了死对头的心上人。'
            },
            {
                imgUrl:require('@/assets/images/jm.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'救命，男主想要攻略我！',
                authods:'莲卿',
                content:'一个反派的自我救赎'
            },
            {
                imgUrl:require('@/assets/images/tz.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'天泽',
                authods:'芸翡',
                content:'★绝逼二代们边谈恋爱边护苍穹★'
            },
            {
                imgUrl:require('@/assets/images/hk.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'花魁',
                authods:'谜底',
                content:'花魁怎么不能是男的？'
            }
            ]
        }
    }
}
</script>