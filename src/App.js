import React, { Component } from 'react';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import './App.css'
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';




import { BrowserRouter, Route } from 'react-router-dom'

const theme = createMuiTheme({
  palette: {
    primary: { main: '#757ce8' }, // Purple and green play nicely together.
    secondary: { main: '#757ce8' }, // This is just green.A700 as hex.
  },
});



class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Route path='/' component={Home} exact />
            <Route path='/contact' component={Contact} />
            <Route path='/portfolio' component={Portfolio} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    )
  }
}

export default App;