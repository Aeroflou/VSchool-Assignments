import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Welcome from './components/Welcome'
import Creature from './components/Creature'
import CreaturesList from './components/CreaturesList'
import { CreatureContext } from './context/CreatureProvider'

export default function App() {
  const { token, logout } = useContext(CreatureContext)
  return (
    <div>
      {token && <Navbar logout={logout}/>}
      <Switch>
        <Route 
          exact path="/"
          render={() => token ? <Redirect to="/welcome"/> : <Auth />}
        />
        <Route 
          path="/welcome"
          render={() => !token ? <Redirect to="/"/> : <Welcome />}
        />
        <Route 
          exact path="/creatures"
          render={() => !token ? <Redirect to="/"/> : <CreaturesList />}
        />
        <Route
          path="/creatures/:creatureId"
          render={() => !token ? <Redirect to="/"/> : <Creature />}
        />
      </Switch>
    </div>
  )
}