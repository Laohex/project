<template>
  <div class="about">
    <div class="top_one"> 
        <YC_ONE/>
        
        <div class="onetop">
            <YC_TOW/>
            <YC_THREE/>
        </div>
        <div class="towtop">
            <YC_FOUR/>
            <YC_FIVE/>
            <YC_SIX/>
            <Shuffling/>
        </div>
    </div>
      <YC_SEVEN/>
      <YC_EIGHT/>
      <div class="anonymousone">
        <YC_NINE/>
        <YC_TEN/>
        <YC_ELEVEN/>
      </div>
      
      <div class="anonymoustow">
        <YC_TWELVW/>
        <YC_THIRTEEN/>
        <YC_FOURTEEN/>
        <YC_FIFTEEN/>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import indexYC from '@/views/indexYC.vue'
import YC_ONE from '@/views/YC/YC_ONE.vue'
import YC_TOW from '@/views/YC/YC_TOW.vue'
import YC_THREE from '@/views/YC/YC_THREE.vue'
import YC_FOUR from '@/views/YC/YC_FOUR.vue'
import YC_FIVE from '@/views/YC/YC_FIVE.vue'
import YC_SIX from '@/views/YC/YC_SIX.vue'
import YC_SEVEN from '@/views/YC/YC_SEVEN.vue'
import Shuffling from './YC/Shuffling.vue'
import YC_EIGHT from '@/views/YC/YC_EIGHT.vue'
import YC_NINE from '@/views/YC/YC_NINE.vue'
import YC_TEN from '@/views/YC/YC_TEN.vue'
import YC_ELEVEN from '@/views/YC/YC_ELEVEN.vue'
import YC_TWELVW from '@/views/YC/YC_TWELVW.vue'
import YC_THIRTEEN from '@/views/YC/YC_THIRTEEN.vue'
import YC_FOURTEEN from '@/views/YC/YC_FOURTEEN.vue'
import YC_FIFTEEN from '@/views/YC/YC_FIFTEEN.vue'

export default {
  name: 'indexYC',
  components: {
        indexYC,
        YC_ONE,
        YC_TOW,
        YC_THREE,
        YC_FOUR,
        YC_FIVE,
        YC_SIX,
        Shuffling,
        YC_SEVEN,
        YC_EIGHT,
        YC_NINE,
        YC_TEN,
        YC_ELEVEN,
        YC_TWELVW,
        YC_THIRTEEN,
        YC_FOURTEEN,
        YC_FIFTEEN


  }
}
</script>
<style>
@import '~@/assets/css/YC.css';
</style>