import React from 'react'
import { Table } from 'antd'
const useHooks = () => {
  /* 表头 */
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '语文',
      dataIndex: 'chinese',
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: '数学',
      dataIndex: 'math',
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: '英语',
      dataIndex: 'english',
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ]
  /* 数据源 */
  const data = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: 89,
    },
  ]
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <>
      <Table
        bordered
        size="middle"
        scroll={{
          x: 'calc(700px + 50%)',
          y: 240,
        }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </>
  )
}
export default useHooks
