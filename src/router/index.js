import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
// import OrderListPage from '../pages/orderList'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      name: 'orderList',
      // component: OrderListPage
      component: resolve => {
        require.ensure([], ()=> {
          resolve(require('../pages/orderList'))
        }, 'orderList')
      }
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'analysis',
          name: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
export default router
