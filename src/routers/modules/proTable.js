import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
const proTableRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '超级表格',
    },
    children: [
      {
        path: '/proTable/useHooks',
        element: lazyLoad(React.lazy(() => import('@/pages/proTable/useHooks/index'))),
        meta: {
          requiresAuth: true,
          title: '使用hooks',
          key: 'useHooks',
        },
      },
      {
        path: '/proTable/useComponent',
        element: lazyLoad(React.lazy(() => import('@/pages/proTable/useComponent/index'))),
        meta: {
          requiresAuth: true,
          title: '使用组件',
          key: 'useComponent',
        },
      },
    ],
  },
]
export default proTableRouter
