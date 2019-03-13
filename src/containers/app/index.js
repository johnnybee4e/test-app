import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import Success from '../success'

const App = () => (
  <div className='app'>
    <header>
      <h1>React/Redux Signup Test App</h1>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/success" component={Success} />
    </main>
  </div>
)

export default App
