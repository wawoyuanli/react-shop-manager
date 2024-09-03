import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import { connect } from 'react-redux'
import React from 'react'

const BreadcrumbNav = props => {
  const { pathname } = useLocation()
  const { themeConfig } = props.globalReducer
  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || []
  const items = [
    {
      title: 'Home',
    },
    {
      title: <a href="">Application Center</a>,
    },
    {
      title: <a href="">Application List</a>,
    },
    {
      title: 'An Application',
    },
  ]
  return (
    <>
      {/* <Breadcrumb items={items}>
       
      </Breadcrumb> */}
    </>
  )
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(BreadcrumbNav)
