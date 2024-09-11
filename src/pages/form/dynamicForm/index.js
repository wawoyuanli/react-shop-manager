import React, { Fragment, useState } from 'react'
import { Button } from 'antd'
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist',
]
function List(props) {
  const listItems = people.map(person => <li key={person}>{person}</li>)
  const { name, children } = props
  const onClickButton = e => {
    /* 阻止默认行为 e.preventDefault()  阻止了少数事件的默认浏览器行为 */
    e.preventDefault()
    // 防止事件进一步冒泡
    // e.stopPropagation()

    alert('点击按钮')
  }
  return (
    <Fragment>
      <Button title={name} type="primary" onClick={onClickButton}>
        点击我
      </Button>
      <ul name={name}>{children}</ul>
      {listItems}
    </Fragment>
  )
}
function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <>
      <Button onClick={onPlayMovie}> Play Movie</Button>
      <Button onClick={onUploadImage}>on upload image</Button>
    </>
  )
}

function ChangeState() {
  const [index, setIndex] = useState(0)
  const handleNextClick = () => {
    setIndex(index + 1)
  }
  return (
    <>
      <div>{index}</div>
      <Button onClick={handleNextClick}>next</Button>
    </>
  )
}
const DynamicForm = () => {
  return (
    <>
      <ChangeState></ChangeState>
      <List name="list"></List>
      <Toolbar onPlayMovie={() => alert('onPlayMovie')} onUploadImage={() => alert('onUploadImage')}></Toolbar>
    </>
  )
}

export default DynamicForm
