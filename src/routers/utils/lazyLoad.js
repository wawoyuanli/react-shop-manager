import React, { Suspense } from 'react'
/* 引入加载中组件 */
import { Spin } from 'antd'

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = Comp => {
  const styleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
  return (
    <Suspense fallback={<Spin size="large" style={styleObj} />}>
      {/* 异步组件 */}
      <Comp />
    </Suspense>
  )
}

export default lazyLoad
