import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { getTableList } from '@/api/modules/table.js'
const useHooks = () => {
  /* 表头 */
  let columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '地区',
      dataIndex: 'region',
    },
    {
      title: '内容',
      dataIndex: 'content',
      fixed: 'right',
    },
  ]
  /* 数据源 */
  const [tableData, setTabledata] = useState()
  useEffect(() => {
    const getTableData = async () => {
      const { data } = await getTableList()
      setTabledata(data.list)
    }
    getTableData()
  }, [])
  /* 改变 */
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
        }}
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        rowKey="key"
        pagination={{ pageSize: 10 }}
      />
    </>
  )
}
export default useHooks
