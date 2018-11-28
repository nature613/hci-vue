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

import Me from '@/components/Me'
import Me1 from '@/components/Me1'
import Me2 from '@/components/Me2'
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
      path: '/me',
      name: 'Me',
      component: Me,
      // beforeEnter: requireAuth()
    },
    {
      path: '/me-one',
      name: 'Me1',
      componenet: Me1
    },
    {
      path: '/me-two',
      name: 'Me2',
      componenet: Me2
    }
  ]
})
