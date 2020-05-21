import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import List from '../pages/list/index'
import Preview from '../pages/preview/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        zIndex: 0
      }
    },
    {
      path: '/List',
      name: 'List',
      component: List,
      meta: {
        zIndex: 1
      }
    },
    {
      path: '/Preview',
      name: 'Preview',
      component: Preview,
      meta: {
        zIndex: 2
      }
    }
  ]
})
