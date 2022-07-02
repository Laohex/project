<template>
  <div class="about">
    <BNFH/>
    <Female/>
    <Youth/>
    <Rexue/>
    <China/>
    <BNQC/>
  </div>
</template>
<script>
import BNFH from '@/views/bnfh/BNFH'
import Female from '@/views/bnfh/Female'
import Youth from '@/views/bnfh/Youth'
import Rexue from '@/views/bnfh/Rexue'
import China from '@/views/bnfh/China'
import BNQC from '@/views/bnfh/BNQC'





export default {
	name: 'indexBNFH',
	components: {
        BNFH,
        Female,
        Youth,
        Rexue,
        China,
        BNQC
	}
}
</script>
<style>
@import '~@/assets/css/elegance.css';
</style>