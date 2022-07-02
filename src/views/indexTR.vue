<template>
  <div class="about">
    <Hot/>
    <Horn/>
    <TRRanking/>
    <Update/>
  </div>
</template>
<script>
import Hot from '@/views/TR/Hot'
import Horn from '@/views/TR/Horn'
import TRRanking from '@/views/TR/TRRanking'
import Update from '@/views/TR/Update'
export default {
  name : 'indexTR',
  components : {
    Hot,
    Horn,
    TRRanking,
    Update
  }
}
</script>
<style scoped>
 @import '~@/assets/css/TR/Hot.css';
 @import '~@/assets/css/TR/Horn.css';
 @import '~@/assets/css/YQ/Ranking.css';
 @import '~@/assets/css/YQ/Update.css';

</style>