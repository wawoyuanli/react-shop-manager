import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant.js'
const dashBoardRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'DashBoard',
    },
    children: [
      {
        path: '/dashboard/dataVisualize',
        element: lazyLoad(React.lazy(() => import('@/pages/dashboard/dataVisualize/index.js'))),
        meta: {
          requiresAuth: true,
          title: '数据可视化',
          key: 'dataVisualize',
        },
      },
      {
        path: '/dashboard/embedded',
        element: lazyLoad(React.lazy(() => import('@/pages/dashboard/embedded/index'))),
        meta: {
          requiresAuth: true,
          title: '内嵌页面',
          key: 'embedded',
        },
      },
    ],
  },
]
export default dashBoardRouter
