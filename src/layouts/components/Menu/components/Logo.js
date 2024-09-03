import logo from '@/assets/images/logo.png'
import { connect } from 'react-redux'
import React from 'react'
const Logo = props => {
  const { isCollapse } = props
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" className="logo-img" />
      {!isCollapse ? <h2 className="logo-text">Hooks Admin</h2> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return state.menuReducer
}
export default connect(mapStateToProps)(Logo)
