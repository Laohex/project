<template>
  <div class="about">
    <Search/>
    <History/>
    <Part/>
    <Over/>
    <Over1/>
    <NewBook/>
    <Tao/>
    <Hot/>
    <Popularity/>
    <NewPeople/>
    <Interactive/>
    <Recent/>
  </div>
</template>
<script>
import History from '@/views/laohe/History.vue'
import Part from '@/views/laohe/Part.vue'
import Over from '@/views/laohe/Over.vue'
import Over1 from '@/views/laohe/Over1.vue'
import NewBook from '@/views/laohe/NewBook.vue'
import Tao from '@/views/laohe/Tao.vue'
import Hot from '@/views/laohe/Hot.vue'
import Popularity from '@/views/laohe/Popularity.vue'
import NewPeople from '@/views/laohe/NewPeople.vue'
import Interactive from '@/views/laohe/Interactive.vue'
import Recent from '@/views/laohe/Recent.vue'
import Search from '@/views/Search.vue'


export default {
	name: 'summary',
	components: {
    History,
      Part,
      Over,
      Over1,
      NewBook,
      Tao,
      Hot,
      Popularity,
      NewPeople,
      Interactive,
      Recent,
      Search
	}
}
</script>
<style>
@import '~@/assets/css/history.css';
</style>
