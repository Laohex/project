<template>
  <div class="cpb">
      <ul>
          <li v-for="(item,index) in cpb" :key="index">
              <img :src="item.images" alt="">
              <p>赞赏</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Cpbqb',
    data:function(){
        return{
            cpb:[
                {
                    images:require('@/assets/images/TQ/cp1.jpg')
                },
                
                {
                    images:require('@/assets/images/TQ/cp2.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp3.jpg')
                },
                
                {
                    images:require('@/assets/images/TQ/cp4.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp5.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp6.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp7.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp8.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp9.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp10.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp11.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp12.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp13.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp14.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp15.jpg')
                },

                {
                    images:require('@/assets/images/TQ/cp16.jpg')
                },
            ]
        }
    }
}
</script>

<style>
    .cpb{
        width: 900px;
        height: 100%;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .cpb>ul>li{
        width: 152px;
        height: 215px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .cpb>ul>li>img{
        width: 150px;
        height: 150px;
        border: 1px solid #eee;
    }
    .cpb>ul>li>p{
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