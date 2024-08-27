import { Button, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HOME_URL } from '@/config/config'
import React from 'react'
const MoreButton = props => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // close multipleTab
  const closeMultipleTab = tabPath => {
    const handleTabsList = props.tabsList.filter(item => {
      return item.path === tabPath || item.path === HOME_URL
    })
    props.setTabsList(handleTabsList)
    tabPath ?? navigate(HOME_URL)
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span>{t('tabs.closeCurrent')}</span>,
          onClick: () => props.delTabs(pathname),
        },
        {
          key: '2',
          label: <span>{t('tabs.closeOther')}</span>,
          onClick: () => closeMultipleTab(pathname),
        },
        {
          key: '3',
          label: <span>{t('tabs.closeAll')}</span>,
          onClick: () => closeMultipleTab(),
        },
      ]}
    />
  )
  return <></>
}
export default MoreButton
