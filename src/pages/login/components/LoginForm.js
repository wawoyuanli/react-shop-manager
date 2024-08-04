import md5 from "js-md5";
import { Button, Form, Input,message } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from "@/config/config.js";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { loginApi } from "@/api/modules/login.js";
import { setToken } from '@/redux/modules/global/action.js'
import React from 'react'
const LoginForm = props => {
  const { t } = useTranslation()
  const { setToken, setTabsList } = props
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState()
  /* 登录 */
  const onFinish = async loginForm => {
    try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			const { data } = await loginApi(loginForm);
			setToken(data?.access_token);
			setTabsList([]);
			message.success("登录成功！");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
  }
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo)
  }

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
          {t('login.reset')}
        </Button>
        <Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
          {t('login.confirm')}
        </Button>
      </Form.Item>
    </Form>
  )
}
const mapDispatchToProps = { setToken }
export default connect(null, mapDispatchToProps)(LoginForm)
