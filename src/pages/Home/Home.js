import React, { Component } from 'react';
import './Home.css';
import { Row, Col, Container, Jumbotron } from 'reactstrap';

import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import Badges from '../../components/Badges'


class Home extends Component {

  componentDidMount() {
    console.log('HOME')
  }

  render() {

    return (
      <div className="home">
        <Navigation />
        <Banner />
        <Badges />
        <div className="skills">
          <hr />
          <span className="skills-intro">
            <h2 >I like to use...</h2>
          </span>
          <hr />
          <Row className="nomargin">
            <Col lg={4} sm={12} className="nomargin">
              <div className="skills-section nomargin">
                <h4 className="skills-section-title">MERN Stack</h4>
                <img src="/images/slackoverflow_640_320.png" />
              </div>
            </Col>
            <Col lg={4} sm={12} className="nomargin">
              <div className="skills-section nomargin">
                <h4 className="skills-section-title">Wordpress</h4>
                <img src="/images/fictionaluniversity_640_320.png" />
              </div>
            </Col>
            <Col lg={4} sm={12} className="nomargin">
              <div className="skills-section nomargin">
                <h4 className="skills-section-title">Meteor</h4>
                <img src="/images/fictionaluniversity_640_320.png" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
