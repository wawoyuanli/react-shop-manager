import { Button, Form, Input, Checkbox } from 'antd'
import React from 'react'

const basicForm = () => {
  return (
    <>
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: '请输入你的姓名' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: '请输入你的密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default basicForm
