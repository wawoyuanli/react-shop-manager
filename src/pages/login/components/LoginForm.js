import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config.js'
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { loginApi } from '@/api/modules/login.js'
import { setToken } from '@/redux/modules/global/action.js'
import { setTabsList } from '@/redux/modules/tabs/action.js'
import md5 from 'js-md5'
import React from 'react'
import './index.less'
const LoginForm = props => {
  const { t } = useTranslation()
  const { setToken, setTabsList } = props
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState()
  /* 登录 */
  const onFinish = async loginForm => {
    setLoading(true)
    loginForm.password = md5(loginForm.password)
    const { data } = await loginApi(loginForm)
    setToken(data?.access_token)
    setTabsList([])
    message.success('登录成功')
    /* 路由跳转 */
    navigate(HOME_URL)
  }
  const onFinishFailed = () => {}

  return (
    <Form form={form} name="basic" labelCol={{ span: 5 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} size="large" autoComplete="off">
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="用户名：admin/user" prefix={<UserOutlined />}></Input>
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          onClick={() => {
            form.resetFields()
          }}
          icon={<CloseCircleOutlined />}
        >
          注 册
        </Button>
        <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
          登 录
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapDispatchToProps = { setToken, setTabsList }
export default connect(null, mapDispatchToProps)(LoginForm)
