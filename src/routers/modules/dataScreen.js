import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
/* 数据大屏模块 */
const dataScreenRouter = [
  {
    path: '/dataScreen/index',
    element: lazyLoad(React.lazy(() => import('@/pages/dataScreen/index.js'))),
    meta: {
      requiresAuth: true,
      title: '数据大屏',
      key: 'dataScreen',
    },
  },
]

export default dataScreenRouter
