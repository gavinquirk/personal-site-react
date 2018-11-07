import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navigation />
        <Banner />
        <span>Home</span>
      </div>
    );
  }
}

export default Home;
