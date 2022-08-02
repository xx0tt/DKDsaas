import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '帝可得', icon: '011-house' }
      }
    ]
  },
  {
    path: '/task',
    component: Layout,
    name: 'task',
    redirect: '/task/business',
    meta: { title: '工单管理', icon: '日志1' },
    children: [
      {
        path: 'business',
        name: 'business',
        component: () => import('@/views/task/business'),
        meta: { title: '运营工单' }
      },
      {
        path: 'operation',
        name: 'operation',
        component: () => import('@/views/task/operation'),
        meta: { title: '运维工单' }
      }
    ]
  },
  {
    path: '/node',
    component: Layout,
    name: 'nodelayout',
    redirect: '/node/region',
    meta: { title: '点位管理', icon: '地标' },
    children: [
      {
        path: 'region',
        name: 'region',
        component: () => import('@/views/node/region'),
        meta: { title: '区域管理' }
      },
      {
        path: 'node',
        name: 'node',
        component: () => import('@/views/node/node'),
        meta: { title: '点位管理' }
      },
      {
        path: 'partner',
        name: 'partner',
        component: () => import('@/views/node/partner'),
        meta: { title: '合作商管理' }
      }
    ]
  },
  {
    path: '/vm',
    component: Layout,
    name: 'vm',
    redirect: '/vm/index',
    meta: { title: '设备管理', icon: '充电桩' },
    children: [
      {
        path: 'index',
        name: 'vmindex',
        component: () => import('@/views/vm/index'),
        meta: { title: '设备管理' }
      },
      {
        path: 'status',
        name: 'vmstatus',
        component: () => import('@/views/vm/status'),
        meta: { title: '设备状态' }
      },
      {
        path: 'type',
        name: 'vmtype',
        component: () => import('@/views/vm/type'),
        meta: { title: '设备类型管理' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'user',
    redirect: '/user/index',
    meta: { title: '人员管理', icon: '管理员_角色管理' },
    children: [
      {
        path: 'index',
        name: 'userindex',
        component: () => import('@/views/user/index'),
        meta: { title: '人员列表' }
      },
      {
        path: 'user-task-stats',
        name: 'user-task-stats',
        component: () => import('@/views/user/user-task-stats'),
        meta: { title: '人效统计' }
      },
      {
        path: 'user-work',
        name: 'user-work',
        component: () => import('@/views/user/user-work'),
        meta: { title: '工作量列表' }
      }
    ]
  },
  {
    path: '/sku',
    component: Layout,
    name: 'sku',
    redirect: '/sku/sku-class',
    meta: { title: '商品管理', icon: 'component' },
    children: [
      {
        path: 'sku-class',
        name: 'sku-class',
        component: () => import('@/views/sku/sku-class'),
        meta: { title: '商品类型' }
      },
      {
        path: 'sku',
        name: 'sku-sku',
        component: () => import('@/views/sku/sku'),
        meta: { title: '商品管理' }
      }
    ]
  },
  {
    path: '/policy',
    component: Layout,
    redirect: '/policy/index',
    children: [
      {
        path: 'index',
        name: 'policy',
        component: () => import('@/views/policy'),
        meta: { title: '策略管理', icon: '灯泡' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/index',
    children: [
      {
        path: 'index',
        name: 'order',
        component: () => import('@/views/order'),
        meta: { title: '订单管理', icon: '订单' }
      }
    ]
  },
  {
    path: '/report',
    component: Layout,
    redirect: '/report/index',
    children: [
      {
        path: 'index',
        name: 'report',
        component: () => import('@/views/report'),
        meta: { title: '对账统计', icon: '账单' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
