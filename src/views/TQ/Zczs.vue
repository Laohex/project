<template>
  <div class="zc">
      <ul>
          <li v-for="(item,index) in zc" :key="index">
              <img :src="item.images" alt="">
              <span>{{item.text}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Zczs',
    data:function(){
        return{
            zc:[
                {
                    images:require('@/assets/images/TQ/zczs.jpg'),
                    text:'微信'
                },

                {
                    images:require('@/assets/images/TQ/zczs3.jpg'),
                    text:'支付宝'
                },
            ]
        }
    }
}
</script>

<style>
    .zc{
        width: 900px;
        height: 500px;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .zc>ul>li{
        width: 152px;
        height: 215px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .zc>ul>li>img{
        width: 150px;
        height: 150px;
        border: 1px solid #eee;
    }
    .zc>ul>li>span{
        width: 152px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>