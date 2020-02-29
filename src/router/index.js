import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/components/404'
import Product from '@/components/Product'
import Case from '@/components/Case'
import Sticker from '@/components/Sticker'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product,
      meta: {
          title: 'Daftar Produk',
          subtitle: 'Daftar Produk',
          transitionName: 'slide'
      }
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      meta: {
          title: 'Case',
          subtitle: 'Case',
          transitionName: 'slide'
      }
    },
    {
      path: '/sticker',
      name: 'Sticker',
      component: Sticker,
      meta: {
          title: 'Sticker',
          subtitle: 'Sticker',
          transitionName: 'slide'
      }
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
      meta: {
          title: 'Not Found',
          subtitle: 'Not Found',
          transitionName: 'slide'
      }
    }
  ]
})
