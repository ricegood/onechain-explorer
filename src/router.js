import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Overview from './views/Overview.vue'
import People from './views/People.vue'
import Research from './views/Research.vue'
import Publication from './views/Publication.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'
import Block from './views/Block.vue'
import Send from './views/Send.vue'
import Page404 from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/overview',
      name: 'overview',
      component: Overview
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    },
    {
      path: '/publication',
      name: 'publication',
      component: Publication
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/block/:number',
      name: 'block',
      component: Block
    },
    {
      path: '/send',
      name: 'send',
      component: Send
    },
    {
      path: '*',
      component: Page404
    }
  ]
})
