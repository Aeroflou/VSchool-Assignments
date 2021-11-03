import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CreatureProvider from './context/CreatureProvider'
import './styles.css'

ReactDOM.render(
  <BrowserRouter>
    <CreatureProvider>
      <App />
    </CreatureProvider>
  </BrowserRouter>,
  document.getElementById('root')
)