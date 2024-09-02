import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config/config'
import './index.less'
import React from 'react'

const NotFound = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate(HOME_URL)
  }
  return <>500</>
}

export default NotFound
