<template>
  <div class="qhy">
      <ul>
          <li v-for="(item,index) in qhy" :key="index">
              <img :src="item.images" alt="">
              <p>赞赏</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Qhybqb',
    data:function(){
        return{
            qhy:[
                {
                    images:require('@/assets/images/TQ/qhy1.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy2.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy3.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy4.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy5.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy6.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy7.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy8.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy9.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy10.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy11.jpg')
                },

                {
                    images:require('@/assets/images/TQ/qhy12.jpg')
                },
            ]
        }
    }
}
</script>

<style>
    .qhy{
        width: 900px;
        height: 100%;
        background-color: white;
        margin-left: 300px;
        overflow: hidden;
    }
    .qhy>ul>li{
        width: 152px;
        height: 215px;
        margin-top: 10px;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: left;
    }
    .qhy>ul>li>img{
        width: 150px;
        height: 150px;
        border: 1px solid #eee;
    }
    .qhy>ul>li>p{
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