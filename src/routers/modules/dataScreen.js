import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant.js'
/* 数据大屏模块 */
const dataScreenRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/dataScreen/index',
        element: lazyLoad(React.lazy(() => import('@/pages/dataScreen/index.js'))),
        meta: {
          requiresAuth: true,
          title: '数据大屏11',
          key: 'dataScreen',
        },
      },
    ],
  },
]

export default dataScreenRouter
