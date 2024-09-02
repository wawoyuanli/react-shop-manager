import React from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'
const linkRouter = [
  {
    element: <LayoutIndex />,
    meta: {
      title: '外部链接',
    },
    children: [
      {
        path: '/link/gitee',
        element: lazyLoad(React.lazy(() => import('@/pages/link/gitee/index'))),
      },
      {
        path: '/link/github',
        element: lazyLoad(React.lazy(() => import('@/pages/link/github/index'))),
      },
      {
        path: '/link/juejin',
        element: lazyLoad(React.lazy(() => import('@/pages/link/juejin/index'))),
      },
      {
        path: '/link/myBlog',
        element: lazyLoad(React.lazy(() => import('@/pages/link/myBlog/index'))),
      },
    ],
  },
]
export default linkRouter
