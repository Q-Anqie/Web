import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'登录页',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path:'/manage',
      name:'后台管理',
      component: () => import('@/views/manage/LayoutView.vue'),
      children: [
        {
          path: '',
          name: '首页',
          redirect: '/manage/system/dashboard'
        },
        {
          path:'system/:submenu',
          name:'系统',
          component: () => import('@/views/DashBoardView.vue'),
        },
        {
          path:'goods',
          name:'商品',
          children: [
            {
              path: 'add',
              name: '添加商品',
              component: () => import('@/views/product/ProductAdd.vue')
            },
            {
              path: ':submenu',
              name: '商品子页',
              component: () => import('@/views/DashBoardView.vue')
            },

          ]
        },
        {
          path:'order/:submenu',
          name:'订单',
          component: () => import('@/views/DashBoardView.vue'),
          children: [
            {
              path: 'orderList',
              name: '订单列表',
              component: () => import('@/views/DashBoardView.vue')
            }
          ]
        },
        {
          path: 'marketing/:submenu',
          name: '营销',
          component: () => import('@/views/DashBoardView.vue'),
          children: [
            {
              path: 'couponList',
              name: '优惠券列表',
              component: () => import('@/views/DashBoardView.vue')
            }
          ]
        },
        {
          path: 'permission/:submenu',
          name: '权限',
          component: () => import('@/views/DashBoardView.vue'),
        }
      ]
    }
  ],
})

export default router
