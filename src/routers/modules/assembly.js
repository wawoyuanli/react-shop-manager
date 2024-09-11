import React, { lazy } from 'react'
import lazyLoad from '@/routers/utils/lazyLoad'
import { LayoutIndex } from '@/routers/constant'

/* 常用组件模块 */
const assemblyRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/assembly/batchImport',
        element: lazyLoad(lazy(() => import('@/pages/assembly/batchImport/index.js'))),
        meta: {
          requiresAuth: true,
          title: '批量导入',
          key: 'batchImport',
        },
      },
      {
        path: '/assembly/guide',
        element: lazyLoad(lazy(() => import('@/pages/assembly/guide/index.js'))),
        meta: {
          requiresAuth: true,
          title: '引导页',
          key: 'guide',
        },
      },
      {
        path: '/assembly/selectIcon',
        element: lazyLoad(lazy(() => import('@/pages/assembly/selectIcon/index.js'))),
        meta: {
          requiresAuth: true,
          title: '批量导入',
          key: 'icon选择',
        },
      },
      {
        path: '/assembly/svgIcon',
        element: lazyLoad(lazy(() => import('@/pages/assembly/svgIcon/index.js'))),
        meta: {
          requiresAuth: true,
          title: 'svg选择',
          key: 'svgIcon',
        },
      },
    ],
  },
]

export default assemblyRouter
