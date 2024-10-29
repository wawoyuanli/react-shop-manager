import React, { useState } from 'react'
import './index.less'
import { Form, Input, Button, message } from 'antd'
import { loginApi } from '../../api/modules/login.js'
import { Navigate, useNavigate } from 'react-router-dom'
import { HOME_URL } from '../../config/config.js'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
const UserLogin = () => {
  const navigate = useNavigate()
  const onFinish = async values => {
    navigate(HOME_URL)
    const query = {
      userName: 'admin',
      password: '123456',
    }
    const {
      message: { data },
    } = await loginApi(query)
    if (data.code === '0') {
      message.open({
        type: 'success',
        content: '登录成功！',
      })
      return <Navigate to="/403" />
    }
  }
  const [title, setTitle] = useState('登录')
  const [tipLogin, setTipLogin] = useState('暂无账号，去注册~')
  const [loginStatus, setLoginStatus] = useState(true)
  /* 注册 */
  const onRegister = () => {
    if (loginStatus) {
      setTitle('注册')
      setTipLogin('已注册，去登录～')
      setLoginStatus(false)
    } else {
      setTitle('登录')
      setTipLogin('暂无账号，去注册～')
      setLoginStatus(true)
    }
  }
  return (
    <div className="login_bg">
      <div className="place">1</div>
      <div className="login_form">
        <div className="title">欢迎{title}</div>
        <Form name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 18 }} onFinish={onFinish}>
          <Form.Item label="用户名" name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入你的密码' }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ minWidth: 150, backgroundColor: '#6284c5', marginBottom: '20px' }}>
            {title}
          </Button>
          <div className="right" onClick={onRegister}>
            {tipLogin}
          </div>
        </Form>
      </div>
    </div>
  )
}
export default UserLogin
