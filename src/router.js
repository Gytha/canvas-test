import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index'
    },
    // 首页
    {
      path: '/index',
      name: 'index',
      // 路由懒加载
      component: () => import('./views/home.vue')
    },
    // 翻译服务
    {
      path: '/translation',
      name: 'translation',
      component: () => import('./views/translation.vue')
    },
    // 搜索译者
    {
      path: '/translator',
      name: 'translator',
      component: () => import('./views/translator.vue')
    },
    // 网文出海
    {
      path: '/article',
      name: 'article',
      component: () => import('./views/article.vue')
    },
    // 联系我们
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/contact.vue')
    },
    // 关于我们
    {
      path: '/about',
      name: 'about',
      // 路由懒加载
      component: () => import('./views/about.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
