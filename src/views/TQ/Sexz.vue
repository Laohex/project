<template>
  <div class="se">
      <ul>
          <li v-for="(item,index) in se" :key="index">
              <img :src="item.images" alt="">
              <span>{{item.text}}</span>
              <p>赞赏</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Sexz',
    data:function(){
        return{
            se:[
                {
                    images:require('@/assets/images/TQ/se1.jpg'),
                    text:'白羊'
                },

                {
                    images:require('@/assets/images/TQ/se2.jpg'),
                    text:'金牛'
                },

                {
                    images:require('@/assets/images/TQ/se3.jpg'),
                    text:'双子'
                },

                {
                    images:require('@/assets/images/TQ/se4.jpg'),
                    text:'巨蟹'
                },

                {
                    images:require('@/assets/images/TQ/se5.jpg'),
                    text:'狮子'
                },

                {
                    images:require('@/assets/images/TQ/se6.jpg'),
                    text:'处女'
                },

                {
                    images:require('@/assets/images/TQ/se7.jpg'),
                    text:'天秤'
                },

                {
                    images:require('@/assets/images/TQ/se8.jpg'),
                    text:'天蝎'
                },

                {
                    images:require('@/assets/images/TQ/se9.jpg'),
                    text:'射手'
                },

                {
                    images:require('@/assets/images/TQ/se10.jpg'),
                    text:'摩羯'
                },

                {
                    images:require('@/assets/images/TQ/se11.jpg'),
                    text:'水瓶'
                },

                {
                    images:require('@/assets/images/TQ/se12.jpg'),
                    text:'双鱼'
                },
            ]
        }
    }
}
</script>

<style>
    .se{
        width: 900px;
        height: 100%;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .se>ul>li{
        width: 152px;
        height: 366px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .se>ul>li>img{
        width: 150px;
        height: 267px;
        border: 1px solid #eee;
    }
    .se>ul>li>span{
        width: 152px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .se>ul>li>p{
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