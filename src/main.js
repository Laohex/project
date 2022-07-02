import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'     //vue-awesome-swiper/dist/vue-awesome-swiper.js


// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'

// import SwiperCore, { Autoplay,EffectCube} from 'swiper';
// SwiperCore.use([Autoplay,EffectCube]);




Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
