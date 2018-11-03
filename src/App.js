import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'

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