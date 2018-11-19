import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Container, Jumbotron } from 'reactstrap';

import Navigation from '../../components/Navigation'
import BannerHome from '../../components/Banner'
// import Badges from '../../components/Badges'
import Skills from '../../components/Skills'
import UCI from '../../components/UCI';
import Artallus from '../../components/Artallus';
import SelfTaught from '../../components/SelfTaught';


class Home extends Component {

  // componentDidMount() {
  //   console.log('HOME')
  // }

  render() {

    return (
      <div className="home">
        <Navigation />
        <BannerHome />
        <UCI />
        <hr/>
        <Artallus />
        <hr/>
        <SelfTaught />
      </div>
    );
  }
}

export default Home;
