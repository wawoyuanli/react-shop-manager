import { Tabs, message } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { connect } from 'react-redux'
import { setTabsList } from '@/redux/modules/tabs/action'
import { routerArray } from '@/routers'
import { searchRoute } from '@/utils/util'
import MoreButton from './components/MoreButton'
import './index.less'
import React from 'react'

const LayoutTabs = props => {
  const { tabsList } = props.tabsReducer
  const { themeConfig } = props.globalReducer
  const { setTabsList } = props
  const { TabPane } = Tabs
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [activeValue, setActiveValue] = useState(pathname)

  useEffect(() => {
    addTabs()
  }, [pathname])

  /* 点击标签 */
  const clickTabs = path => {
    navigate(path)
  }

  /* 添加标签 */
  const addTabs = () => {
    const route = searchRoute(pathname, routerArray)
    let newTabsList = JSON.parse(JSON.stringify(tabsList))
    if (tabsList.every(item => item.path !== route.path)) {
      newTabsList.push({ title: '00', path: '/login' })
    }
    setTabsList(newTabsList)
    setActiveValue(pathname)
  }

  /* 删除标签 */
  const delTabs = tabPath => {
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
  }
  const items = [
    {
      key: '/home/index',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '/menu/menu1',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '/menu/menu3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ]
  return (
    <>
      <div className="tabs">
        <Tabs
          items={items}
          animated
          activeKey={activeValue}
          onChange={clickTabs}
          hideAdd
          type="editable-card"
          onEdit={path => {
            delTabs(path)
          }}
        >
          {/* {tabsList.map(item => {
            return (
              <TabPane
                key={item.path}
                tab={
                  <span>
                    {item.path === HOME_URL ? <HomeFilled /> : ''}
                    {item.title}
                  </span>
                }
                closable={item.path !== HOME_URL}
              ></TabPane>
            )
          })} */}
        </Tabs>
        <MoreButton tabsList={tabsList} delTabs={delTabs} setTabsList={setTabsList}></MoreButton>
      </div>
    </>
  )
}

const mapStateToProps = state => state
const mapDispatchToProps = { setTabsList }
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs)
