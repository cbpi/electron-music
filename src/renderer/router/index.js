import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import LoginLayout from '../view/login'

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
      path: '/user',
      redirect: '/user/qrlogin',
      component: LoginLayout,
      children: [
        {
          path: 'qrlogin',
          component: () => import('@/view/login/qrLogin.vue'),
          name: 'qrlogin',
          meta: { title: '扫码登录' }
        },
        {
          path: 'numlogin',
          component: () => import('@/view/login/numLogin.vue'),
          name: 'numlogin',
          meta: { title: '手机号码登录' }
        },
        {
          path: 'register',
          component: () => import('@/view/login/register.vue'),
          name: 'register',
          meta: { title: '注册' }
        },
        {
          path: 'reset',
          component: () => import('@/view/login/reset.vue'),
          name: 'reset',
          meta: { title: '重置' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
