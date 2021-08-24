import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          component: () => import('@/view/home/index'),
          name: 'index',
          meta: { title: '首页' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
