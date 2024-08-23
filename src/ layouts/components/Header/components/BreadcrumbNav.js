import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { connect } from 'react-redux'
import React from 'react'

const BreadcrumbNav = props => {
  const { pathname } = useLocation()
  const { themeConfig } = props.globalReducer
  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || []

  return (
    <>
      {!themeConfig.breadcrumb && (
        <Breadcrumb>
          <Breadcrumb.Item href={`#${HOME_URL}`} items={[{ title: '首页' }]}></Breadcrumb.Item>
          {breadcrumbList.map(item => {
            return <Breadcrumb.Item key={item} items={[{ title: '首页' }]}></Breadcrumb.Item>
          })}
        </Breadcrumb>
      )}
    </>
  )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(BreadcrumbNav)
