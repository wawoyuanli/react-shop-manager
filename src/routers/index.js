import { Navigate, useRoutes } from 'react-router-dom'
/* 登录 */
import Login from '../pages/login/index'
/* 首页 */
import Home from '../pages/home/index'
/* 面板 */
import Panel from '../pages/panel/index'
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
  {
    path: '/home/index',
    element: <Home />,
    meta: {
      requiresAuth: true,
      title: '首页',
      key: 'home',
    },
  },
  {
    path: '/panel/index',
    element: <Panel />,
    meta: {
      requiresAuth: true,
      title: '面板',
      key: 'panel',
    },
  },
]
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
