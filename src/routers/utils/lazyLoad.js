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
    //Comp:lazy返回的组件
    /*
      lazy 返回一个可以在树中渲染的 React 组件。
      当惰性组件的代码仍在加载时，尝试渲染它将会挂起。
      使用 <Suspense> 在加载时显示加载指示器。
    */
    <>
      <Suspense fallback={<Spin size="large" style={styleObj} />}>
        {/* 异步组件 */}
        <Comp />
      </Suspense>
    </>
  )
}

export default lazyLoad
