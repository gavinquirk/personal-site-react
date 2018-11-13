import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Container, Jumbotron } from 'reactstrap';

import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
// import Badges from '../../components/Badges'
import Skills from '../../components/Skills'
import UCI from '../../components/UCI';


class Home extends Component {

  componentDidMount() {
    console.log('HOME')
  }

  render() {

    return (
      <div className="home">
        <Navigation />
        <Banner />
        {/* <Badges /> */}
        {/* <Skills /> */}
        <UCI />



      </div>
    );
  }
}

export default Home;
