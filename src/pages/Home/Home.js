import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import './Home.css';
import { Row, Col, Container, Jumbotron } from 'reactstrap';

class Home extends Component {

  componentDidMount() {
    console.log('HOME')
  }

  render() {

    return (
      <div className="home">
        <Navigation />
        <Banner />
        <div className="skills">
          <Row className="nomargin">
            <Col lg={6} sm={12} className="nomargin">
              <div className="skills-section nomargin">
                <p>MERN</p>
              </div>
            </Col>
            <Col lg={6} sm={12} className="nomargin">
              <div className="skills-section nomargin">
                <p>Wordpress</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
