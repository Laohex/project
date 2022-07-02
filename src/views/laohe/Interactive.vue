<template>
    <div class="hot_outone">
        <div class="hot-top">
            <img src="@/assets/images/nb.png"><span>互动榜</span> 
        </div>
        <div class="hot-bottom">
            <div class="hot-bottom1">
                <ul>
                    <li v-for="(item,index) in datas" :key="index">
                        <span><img src="@/assets/images/dy.png"></span>
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
            <div class="hot-two">
                    <span>2</span>
                    <a href="">再世权臣</a>
            </div>
            <div class="hot-three">
                    <span>3</span>
                    <a href="">凭栏江月</a>
            </div>
            <div class="hot-ranking" v-for="(item,index) in rank" :key="index">
                <span>{{item.rank}}</span>
                <a href="">{{item.Bname}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'history',
    data:function(){
        return{
            
            datas:[{
                imgUrl:require('@/assets/images/de.jpg'),
                imgurl:require('@/assets/images/gb.png'),
                name:'渡厄',
                authods:'杨溯',
                content:'我有孽徒，秀丽无双。'
            }
            ],
            rank:[{
                rank:'4',
                Bname:'督主有病'
            },
            {
                rank:'5',
                Bname:'明月下凉州'
            },
            {
                rank:'6',
                Bname:'烧雪'
            },
            {
                rank:'7',
                Bname:'扶鸾'
            },
            {
                rank:'8',
                Bname:'遵命'
            },
            {
                rank:'9',
                Bname:'越明年'
            },
            {
                rank:'10',
                Bname:'代嫁皇后'
            },
            ]
        }
    }
}
</script>