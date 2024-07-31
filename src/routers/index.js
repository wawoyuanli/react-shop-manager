import { Navigate, useRoutes } from 'react-router-dom'
import Login from '../pages/login/index'
import React from 'react'
// 配置路由映射 （不同的路由对应渲染不同的页面组件）
const rootRouter = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login',
    },
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
