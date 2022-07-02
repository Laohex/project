<template>
    <div class="china">
        <div class="female-top">热血竞技</div>
        <div class="china-bottom">
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
        <div class="china-low">
            <span class="low-1">详情参见</span>
            <a href="https://www.gongzicp.com/article/detail/43.html"><span>《百年风华遇见青春活动规则》</span></a>
            <span class="low-2"></span>
        </div>
    </div>
</template>
<script>
export default {
    name:'china',
    data:function(){
        return{
            datas:[{
                imgUrl:require('@/assets/images/njfk.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'南极访客',
                authods:'飞鹤',
                content:'我在南纬69º东经76º的南极'
            },
            {
                imgUrl:require('@/assets/images/yscf.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'一树春风',
                authods:'少年白',
                content:'三失青年上山栽树 '
            },
            {
                imgUrl:require('@/assets/images/tg.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'田埂',
                authods:'小洵小洵',
                content:'梦里看见了青山'
            }
            ]
        }
    }
}
</script>