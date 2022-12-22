import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginInsta extends Component {
  state = {
    username: '',
    password: '',
    SubmitError: false,
    errorMsg: '',
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({SubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {SubmitError, errorMsg, password, username} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-form">
        <img
          src="https://img.freepik.com/premium-vector/online-regi…n-people-vector-illustration_2175-1058.jpg?w=1060"
          className="login-mobile-img"
          alt="website logo"
        />
        <img
          src="https://img.freepik.com/premium-vector/online-regi…n-people-vector-illustration_2175-1058.jpg?w=1060"
          className="login-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="bg-logo-img">
            <h1 className="head"> InstaShare </h1>
            <img
              src="https://cdn-icons-png.flaticon.com/512/725/725278.png"
              className="login-website-img"
              alt="website logo"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="username-input"
              value={username}
              onChange={this.onChangeUser}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            {' '}
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="password-input"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {SubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginInsta
