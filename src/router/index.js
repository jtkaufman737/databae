import Vue from 'vue';
import Router from 'vue-router';
import Posts from '@/components/Posts';
import About from '@/components/About';
import Elsewhere from '@/components/Elsewhere';

export default new Router({
  routes: [
    {
      path:'/',
      name:'Posts',
      component: Posts
    },
    {
      path:'/about',
      name:'About',
      component: About
    },
    {
      path: '/elsewhere',
      name: 'Elsewhere',
      component: Elsewhere
    }
  ]
})
