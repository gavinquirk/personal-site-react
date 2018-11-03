import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Navbar from './pages/Navbar'

import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path='/' component={Home} exact/>
        <Route path='/contact' component={Contact}/>
        <Route path='/portfolio' component={Portfolio}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;