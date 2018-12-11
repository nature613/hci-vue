import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import SignPage from '@/components/SignPage'
import SimpleDeep from '@/components/SimpleDeep'
import HeaderLogo from '@/components/HeaderLogo'
import HeaderToggle from '@/components/HeaderToggle'
import Simple from '@/components/Simple'
import Deep from '@/components/Deep'
import SimpleWrite from '@/components/SimpleWrite'
import DeepWrite from '@/components/DeepWrite'
import Toolbar from '@/components/Toolbar'
import ToolbarSign from '@/components/ToolbarSign'

import MeContent from '@/components/MeContent'
import MeComment from '@/components/MeComment'
import MeVote from '@/components/MeVote'


import MyPage from '@/components/MyPage'
import store from '../store'


Vue.use(Router)

// const requireAuth = () => (to, from, next) => {
//   if (store.getters.isAuthenticated) return next()
//   next('/?returnPath=me')
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-page',
      name: 'SignPage',
      component: SignPage
    },
    {
      path: '/simple-deep',
      name: 'SimpleDeep',
      component: SimpleDeep
    },
    {
      path: '/simple',
      name: 'Simple',
      component: Simple
    },
    {
      path: '/deep',
      name: 'Deep',
      component: Deep
    },
    {
      path: '/header-toggle',
      name: 'HeaderToggle',
      component: HeaderToggle
    },
    {
      path: '/header-logo',
      name: 'HeaderLogo',
      component: HeaderLogo
    },
    {
      path: '/simple-write',
      name: 'SimpleWrite',
      component: SimpleWrite
    },
    {
      path: '/deep-write',
      name: 'DeepWrite',
      component: DeepWrite
    },
    {
      path: '/toolbar',
      name: 'Toolbar',
      component: Toolbar
    },
    {
      path: '/toolbar-sign',
      name: 'ToolbarSign',
      component: ToolbarSign
    },
    {
      path: '/me-content',
      name: 'MeContent',
      component: MeContent,
      // beforeEnter: requireAuth()
    },
    {
      path: '/me-comment',
      name: 'MeComment',
      component: MeComment
    },
    {
      path: '/me-vote',
      name: 'MeVote',
      component: MeVote
    },
    {
      path: '/me-tab',
      name: 'MeTab',
      component: () => import('../components/MeTab.vue'),
    },
    {
      path: '/my',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/deep-main/:id/:tab',
      name: 'DeepMain',
      component: () => import('../components/DeepMain.vue'),
    },
    {
      path: '/deep-content/:id',
      name: 'DeepContent',
      component: () => import('../components/DeepContent.vue'),
    },
    {
      path: '/deep-stats/:id',
      name: 'DeepStats',
      component: () => import('../components/DeepStats.vue'),
    },
    {
      path: '/deep-comment/:id',
      name: 'DeepComment',
      component: () => import('../components/DeepComment.vue'),
    },
  ]
})
