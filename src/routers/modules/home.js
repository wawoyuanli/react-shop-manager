// import React from "react";
// import lazyLoad from "@/routers/util/lazyLoad";
import { LayoutIndex } from '@/routers/constant'
import Home from '@/pages/home/index'
import React from 'react'

// 首页模块
const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: '/home/index',
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home',
        },
      },
    ],
  },
]

export default homeRouter
