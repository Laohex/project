<template>
    <div class="ess">
         <ul>
          <li v-for="(item,index) in ess" :key="index">
              <img :src="item.images" alt="">
              <span>{{item.text}}</span>
              <p>赞赏</p>
          </li>
      </ul>
    </div>
</template>

<script>
export default {
    name:'Essjq',
    data:function(){
        return{
            ess:[
                {
                    images:require('@/assets/images/TQ/ess1.jpg'),
                    text:'立春'
                },

                {
                    images:require('@/assets/images/TQ/ess2.jpg'),
                    text:'雨水'
                },

                {
                    images:require('@/assets/images/TQ/ess3.jpg'),
                    text:'惊蛰'
                },

                {
                    images:require('@/assets/images/TQ/ess4.jpg'),
                    text:'春分'
                },

                {
                    images:require('@/assets/images/TQ/ess5.jpg'),
                    text:'清明'
                },

                {
                    images:require('@/assets/images/TQ/ess6.jpg'),
                    text:'谷雨'
                },

                {
                    images:require('@/assets/images/TQ/ess7.jpg'),
                    text:'立夏'
                },

                {
                    images:require('@/assets/images/TQ/ess8.jpg'),
                    text:'小满'
                },

                {
                    images:require('@/assets/images/TQ/ess9.jpg'),
                    text:'芒种'
                },

                {
                    images:require('@/assets/images/TQ/ess10.jpg'),
                    text:'夏至'
                },

                {
                    images:require('@/assets/images/TQ/ess11.jpg'),
                    text:'小暑'
                },

                {
                    images:require('@/assets/images/TQ/ess12.jpg'),
                    text:'大暑'
                },

                {
                    images:require('@/assets/images/TQ/ess13.jpg'),
                    text:'立秋'
                },

                {
                    images:require('@/assets/images/TQ/ess14.jpg'),
                    text:'处暑'
                },

                {
                    images:require('@/assets/images/TQ/ess15.jpg'),
                    text:'白露'
                },

                {
                    images:require('@/assets/images/TQ/ess16.jpg'),
                    text:'秋分'
                },

                {
                    images:require('@/assets/images/TQ/ess17.jpg'),
                    text:'寒露'
                },

                {
                    images:require('@/assets/images/TQ/ess18.jpg'),
                    text:'霜降'
                },

                {
                    images:require('@/assets/images/TQ/ess19.jpg'),
                    text:'立冬'
                },

                {
                    images:require('@/assets/images/TQ/ess20.jpg'),
                    text:'小雪'
                },

                {
                    images:require('@/assets/images/TQ/ess21.jpg'),
                    text:'大雪'
                },

                {
                    images:require('@/assets/images/TQ/ess22.jpg'),
                    text:'冬至'
                },

                {
                    images:require('@/assets/images/TQ/ess23.jpg'),
                    text:'小寒'
                },

                {
                    images:require('@/assets/images/TQ/ess24.jpg'),
                    text:'大寒'
                },
            ]
        }
    }
}
</script>

<style>
     .ess{
        width: 900px;
        height: 100%;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .ess>ul>li{
        width: 152px;
        height: 366px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .ess>ul>li>img{
        width: 150px;
        height: 267px;
        border: 1px solid #eee;
    }
    .ess>ul>li>span{
        width: 152px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .ess>ul>li>p{
        width: 100px;
        height: 32px;
        background-color: #51c29a;
        
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 10px;
    }
</style>