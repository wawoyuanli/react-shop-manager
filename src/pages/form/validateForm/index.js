import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Space } from 'antd'
const SubmitButton = ({ form, children }) => {
  // form.setFieldsValue({
  //   name: '胡远里',
  //   age: 10,
  // })
  /* 获取对应字段名的值 */
  const name = form.getFieldValue('name')
  const age = form.getFieldValue('age')
  console.log(name, '姓名', age, '年龄')
  /* 获取一组字段名对应的值 */
  const fieldvalues = form.getFieldValue()
  console.log(fieldvalues, '获取一组字段名对应的值,并按照对应结构返回')
  /* 定义数据 */
  const [submitTable, setSubmitTable] = useState(true)
  const values = Form.useWatch([], form)
  useEffect(() => {
    /* 触发表单验证 */
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => {
        /* 验证通过后进入 */
        setSubmitTable(true)
        console.log('校验成功')
      })
      .catch(() => {
        /* 验证不通过后进入 */
        setSubmitTable(false)
      }, [form, values])
  })
  const onSubmit = () => {
    console.log('点击提交')
  }
  return (
    <Button type="primary" htmlType="onSubmit" disabled={!submitTable} onClick={onSubmit}>
      {children}
    </Button>
  )
}
const ValidateForm = () => {
  const [form] = Form.useForm()
  return (
    <>
      <Form form={form} name="validateOnly">
        <Form.Item name="name" label="Name" rules={[{ required: true }]} labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age" rules={[{ required: true }]} labelCol={{ span: 4 }} wrapperCol={{ span: 10 }}>
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} labelCol={{ span: 4 }} wrapperCol={{ offset: 3, span: 10 }}>
          <Space>
            <SubmitButton form={form}>Submit</SubmitButton>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}
export default ValidateForm
