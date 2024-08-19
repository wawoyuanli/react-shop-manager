import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { updateCollapse } from '@/redux/modules/menu/action'

const CollapseIcon = props => {
  const { isCollapse, updateCollapse } = props
  return (
    <div
      className="collapsed"
      onClick={() => {
        updateCollapse(!isCollapse)
      }}
    >
      {isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
    </div>
  )
}

const mapStateToProps = state => {
  // state.menuReducer
  debugger
}
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon)
