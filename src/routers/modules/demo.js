import React, { lazy } from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
/* 常用组件模块 */
const demo = [
  {
    element: lazyLoad(lazy(() => import('@/pages/demo/index.js'))),
    path: '/demo',
    meta: {
      title: '',
    },
  },
  // {
  //   path: '/dataScreen/index',
  //   element: lazyLoad(React.lazy(() => import('@/pages/dataScreen/index.js'))),
  //   meta: {
  //     requiresAuth: true,
  //     title: '数据大屏',
  //     key: 'dataScreen',
  //   },
  // },
]
export default demo
