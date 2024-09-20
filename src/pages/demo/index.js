/* 
 类组件demo
*/
import { Button, message } from 'antd'
import React, { Component } from 'react'
class Hello extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  state = {
    msg: 'hello world',
  }
  onClickHandle() {
    console.log('我是类式组件，我是有状态的', this.state.msg)
    message.open({
      type: 'success',
      content: '我是message',
    })
  }
  render(h) {
    return (
      <>
        <Button type="primary" onClick={this.onClickHandle.bind(this)}>
          点我{this.props.name}
        </Button>
      </>
    )
  }
}
const Demo = () => {
  return (
    <>
      <Hello name="我是入参" />
    </>
  )
}
export default Demo
