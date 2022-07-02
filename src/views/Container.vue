<template>
  <div class="about">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/views/Nav.vue'


export default {
	name: 'Nav',
	components: {
    Nav
	}

}
</script>
<style>
@import './assets/css/public.css';
@import './assets/css/YC.css';
</style>
