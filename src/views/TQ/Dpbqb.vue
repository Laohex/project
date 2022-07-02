<template>
  <div class="dpb">
      <ul>
          <li v-for="(item,index) in dpb" :key="index">
              <img :src="item.images" alt="">
              <p>赞赏</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Dpbqb',
    data:function(){
        return{
            dpb:[
                {
                    images:require('@/assets/images/TQ/dp1.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp2.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp3.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp4.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp5.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp6.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp7.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp8.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp9.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp10.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp11.jpg')
                },

                {
                    images:require('@/assets/images/TQ/dp12.jpg')
                },
            ]
        }
    }
}
</script>

<style>
    .dpb{
        width: 900px;
        height: 100%;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .dpb>ul>li{
        width: 152px;
        height: 215px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .dpb>ul>li>img{
        width: 150px;
        height: 150px;
        border: 1px solid #eee;
    }
    .dpb>ul>li>p{
        width: 100px;
        height: 32px;
        background-color: #51c29a;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 10px;
    }
</style>