import Vue from 'vue'
import VueRouter from 'vue-router'
import Status from '../views/Status.vue'
import CPQ from '../views/CPQ.vue'
import indexTQ from '../views/indexTQ.vue' 
import Summary from '../views/laohe/Summary.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'status',
    component:Status
  },
  {
    path:'/indexTQ',
    name:'indexTQ',
    component:indexTQ,
  },{
    path:'/Summary',
    name:'Summary',
    component:Summary,
  },{
    path:'/CPQ',
    name:'CPQ',
    component:CPQ,
  }
]

const router = new VueRouter({
  routes
})

export default router
