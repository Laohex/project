<template>
    <div class="TRranking">

        <div class="Public">
            <Public/>
        </div>

        <div class="CP">
            <CP/>
        </div>

        <div class="Original">
            <Original/>
        </div>

        <div class="Assist">
            <Assist/>
        </div>
        
    </div>
</template>
<script>
import Public from '@/views/TR/Public'
import CP from '@/views/TR/CP'
import Original from '@/views/TR/Original'
import Assist from '@/views/TR/Assist'


export default {
    name:'ranking',
    components: {
        Public,
        CP,
        Original,
        Assist
    }
}
</script>
<style scoped>
@import '~@/assets/css/YQ/Sell.css';
@import '~@/assets/css/TR/TRRanking.css';

</style>
