import React from 'react'
import './index.less'
import { Form, Input, Button, message } from 'antd'
import { loginApi } from '../../api/modules/login.js'
import { Navigate } from 'react-router-dom'
const UserLogin = () => {
  const onFinish = async values => {
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
  return (
    <div className="login_bg">
      <Form name="basic" labelCol={{ span: 9 }} wrapperCol={{ span: 6 }} onFinish={onFinish}>
        <Form.Item label="用户名" name="userName" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入你的密码' }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{ minWidth: 150 }}>
          提交
        </Button>
      </Form>
    </div>
  )
}
export default UserLogin
