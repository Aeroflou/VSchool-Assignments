import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {DumbContextProvider} from "./context"
import {BrowserRouter as Router} from "react-router-dom"
import "./styles.css"

ReactDOM.render(
  <Router>
    <DumbContextProvider>
      <App />
    </DumbContextProvider>
  </Router>,
  document.getElementById('root')
);