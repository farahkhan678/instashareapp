import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginInsta from './components/LoginInsta'
import './App.css'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './Context/ThemeContext'

class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(preState => ({isDarkTheme: !preState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            toggleTheme: this.toggleTheme,
          }}
        >
          <Switch>
            <Route exact path="/LoginInsta" component={LoginInsta} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/my-profile" component={MyProfile} />
            <ProtectedRoute
              exact
              path="/users/:userId"
              component={UserProfile}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeContext.Provider>
      </>
    )
  }
}

export default App
