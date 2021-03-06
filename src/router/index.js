import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import GoogleMap from '@/components/google-map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/:cafeName',
      name: 'cafe',
      component: GoogleMap
    }
  ]
})
