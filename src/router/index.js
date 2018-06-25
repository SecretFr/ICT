import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'Example',
      component: Example
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/table',
      name: 'table',
      component: table
    }
  ]
})
