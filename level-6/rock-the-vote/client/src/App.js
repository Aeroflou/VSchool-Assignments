import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserProvider'

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div>
      {token && <Navbar logout={logout}/>}
      <Switch>
        <Route 
          exact path="/"
          render={() => token ? <Redirect to="/profile"/> : <Auth />}
        />
        <Route 
          path="/profile"
          render={() => !token ? <Redirect to="/"/> : <Profile />}
        />
        <Route 
          path="/issues"
          render={() => !token ? <Redirect to="/"/> : <Public />}
        />
      </Switch>
    </div>
  )
}

export default App