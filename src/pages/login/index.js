import LoginForm from './components/LoginForm.js'
import logo from '../../assets/images/logo.png'
import loginLeft from '../../assets/images/login_left.png'
import SwitchDark from '../../components/SwitchDark/index.js'
import './index.css'
const Login = () => {
  return (
    <div className="login-container">
      <SwitchDark />
      <div className="login-box">
        <div className="login-left">
          <img src={loginLeft} alt="login"></img>
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo"></img>
            <span className="logo-text">React Admin</span>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
export default Login
