/* 入口文件 */
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
function App() {
  return (
    <div className="App">
      <Button type="primary"> 11</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
