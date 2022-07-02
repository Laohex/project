<template>
    <div class="ranking">

        <div class="sell">
            <Sell/>
        </div>

        <div class="mood">
            <Mood/>
        </div>

        <div class="end">
            <End/>
        </div>

        <div class="admire">
            <Admire/>
        </div>
        
    </div>
</template>
<script>
import Sell from '@/views/YQ/Sell'
import Mood from '@/views/YQ/Mood'
import End from '@/views/YQ/End'
import Admire from '@/views/YQ/Admire'


export default {
    name:'ranking',
    components: {
        Sell,
        Mood,
        End,
        Admire
    }
}
</script>
<style scoped>
@import '~@/assets/css/YQ/Sell.css';
</style>
