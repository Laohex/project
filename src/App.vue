<template>
  <div id="app">
    <Heand/>
    <router-view/>
    <Tail/>
  </div>
</template>
<script>
import Heand from '@/components/Heand'
import Tail from '@/components/Tail'


export default {
	name: 'app',
	components: {
		Heand,
    Tail
	}

}
</script>
<style>
@import './assets/css/public.css';
</style>
