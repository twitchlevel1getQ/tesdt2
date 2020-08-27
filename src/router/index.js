import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import room from '@/components/room'
import about from '@/components/about'
import axios from 'axios'

Vue.use(Router)
Vue.prototype.$axios = axios;
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'room',
      component: room
    },
    {
      path: '/',
      name: 'about',
      component: about
    },
    
  ]
})
