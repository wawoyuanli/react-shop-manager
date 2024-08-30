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
        element: lazyLoad(React.lazy(() => import('@/views/proTable/useHooks/index'))),
      },
    ],
  },
]
export default proTableRouter
