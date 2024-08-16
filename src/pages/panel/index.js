import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import './index.less'
import { useNavigate } from 'react-router-dom'
const { Header, Sider, Content } = Layout
const routers = [
  {
    key: '/home/index',
    icon: <UserOutlined />,
    label: '首页',
  },
  {
    key: '/login',
    icon: <VideoCameraOutlined />,
    label: '登录',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3',
  },
]

const Panel = () => {
  const [openKeys] = useState()
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys] = useState()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  // 点击当前菜单跳转页面
  const navigate = useNavigate()
  const clickMenu = key => {
    navigate(key.key)
  }
  const onOpenChange = () => {}
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/login']} items={routers} openKeys={openKeys} selectedKeys={selectedKeys} onClick={clickMenu} onOpenChange={onOpenChange} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
export default Panel
