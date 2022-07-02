<template>
    <div class="about">
        <div class="shequ">
            <the_one/>
            <the_tow/>
            <the_three/>
            <the_four/>
           
        </div>
         <div>
              <div class="the_no">
                  <span>
                      到底啦~    看看别的吧
                  </span>
              </div>
         </div>
    </div>
</template>
<script>
import the_one from '@/views/SQ/the_one'
import the_tow from '@/views/SQ/the_tow'
import the_three from '@/views/SQ/the_three'
import the_four from '@/views/SQ/the_four'

   export default{
        name: 'Community', 
        current: 'the_one',//默认显示原创
        components:{
            the_one,
            the_tow,
            the_three,
            the_four,
         }
    
   }
</script>
<style>
@import '~@/assets/css/SQ.css';
</style>
