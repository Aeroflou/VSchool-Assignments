import React from "react"
import {Switch, Route} from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Classes from "./pages/dnd-classes/Classes"
import Class from "./pages/dnd-classes/Class"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/classes">
          <Classes />
        </Route>
        <Route path="/classes/:className">
          <Class />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
