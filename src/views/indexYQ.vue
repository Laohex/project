<template>
  <div class="about">
    <Heard/>
    <Wjqt/>
    <Classify/>
    <Ranking/>
    <Update/>
  </div>
</template>
<script>
import Heard from '@/views/YQ/Heard'
import Wjqt from '@/views/YQ/Wjqt'
import Classify from '@/views/YQ/Classify'
import Ranking from '@/views/YQ/Ranking'
import Update from '@/views/YQ/Update'
export default {
  name: 'indexYQ',
  components: {
    Heard,
    Wjqt,
    Classify,
    Ranking,
    Update
  }
}
</script>

<style scoped>
  @import '~@/assets/css/YQ/YQtop.css';
  @import '~@/assets/css/YQ/Wjqt.css';
  @import '~@/assets/css/YQ/Classify.css';
  @import '~@/assets/css/YQ/Ranking.css';
  @import '~@/assets/css/YQ/Update.css';
</style>