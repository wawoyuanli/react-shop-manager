import { lazy } from 'react'
import lazyLoad from '../../routers/utils/lazyLoad.js'

/* 常用组件模块 */
const appRouter = [
  {
    path: '/app/home',
    element: lazyLoad(lazy(() => import('@/pages/mobile/home/index.js'))),
    meta: {
      requiresAuth: true,
      title: '批量导入',
      key: 'appHome',
    },
  },
  {
    path: '/app/contractUs',
    element: lazyLoad(lazy(() => import('@/pages/mobile/contactUs/index.js'))),
    meta: {
      requiresAuth: true,
      title: '批量导入',
      key: 'appContract',
    },
  },
  {
    path: '/app/apple/detail',
    element: lazyLoad(lazy(() => import('@/pages/mobile/detail/index.js'))),
    meta: {
      requiresAuth: true,
      title: '批量导入',
      key: 'appDetail',
    },
  },
]

export default appRouter
