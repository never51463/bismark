import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mark from '@/components/Mark'
import Problem from '@/components/Problem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bismark',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/poi',
    	component:Mark,
    	children:[{
    		path:'pro',
    		component:Problem
    	}]
    }
  ]
})
