/*
@author:hyl
@date:2024-09-03
 顶部标签处理
*/
import { Tabs, message } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { connect } from 'react-redux'
import { setTabsList } from '@/redux/modules/tabs/action'
import { routerArray } from '@/routers/index.js'
import { searchRoute } from '@/utils/util'
import MoreButton from './components/MoreButton'
import './index.less'
import React from 'react'
const LayoutTabs = props => {
  /* 存储的菜单路径信息 */
  const { tabsList } = props.tabsReducer
  // const { themeConfig } = props.globalReducer
  const { setTabsList } = props
  const { pathname } = useState()
  const navigate = useNavigate()
  const [activeValue, setActiveValue] = useState(pathname)

  /* 初始化执行 ｜ 组件更新渲染执行 使用场景：初次渲染页面时访问接口加载页面数据 */
  useEffect(() => {
    addTabs()
  }, [pathname])

  /* 点击标签 */
  const clickTabs = path => {
    navigate(path)
  }
  const items = [
    {
      key: '/home/index',
      label: '首页',
    },
  ]
  /* 添加标签 */
  const addTabs = () => {
    console.log(routerArray, 'routerArray')
    const route = searchRoute(pathname, routerArray)
    items.push({
      key: route.path,
      label: route.meta.title,
    })
    let newTabsList = JSON.parse(JSON.stringify(tabsList))
    if (tabsList.every(item => item.path !== route.path)) {
      newTabsList.push({ title: route.meta.title, path: route.path, key: route.meta.title })
    }
    setTabsList(newTabsList)
    setActiveValue(pathname)
  }

  /* 删除标签 */
  const delTabs = tabPath => {
    debugger
    if (tabPath === HOME_URL) return
    if (pathname === tabPath) {
      tabsList.forEach((item, index) => {
        if (item.path !== pathname) return
        const nextTab = tabsList[index + 1] || tabsList[index - 1]
        if (!nextTab) return
        navigate(nextTab.path)
      })
    }
    message.success('你删除了Tabs标签 😆😆😆')

    setTabsList(tabsList.filter(item => item.path !== tabPath))
    console.log(
      tabsList.filter(item => item.path !== tabPath),
      'tabsList.filter(item => item.path !== tabPath)'
    )
  }

  return (
    <>
      <div className="tabs">
        <Tabs
          // defaultActiveKey="/home/index"
          items={items}
          animated
          activeKey={activeValue}
          onChange={clickTabs}
          hideAdd
          type="editable-card"
          onEdit={path => {
            delTabs(path)
          }}
        />
        {/* <MoreButton tabsList={tabsList} delTabs={delTabs} setTabsList={setTabsList}></MoreButton> */}
      </div>
    </>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = { setTabsList }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs)
