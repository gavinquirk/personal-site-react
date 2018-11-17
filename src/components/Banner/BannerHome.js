import React, { Component } from 'react';
import './BannerHome.css'
import { Row, Col } from 'reactstrap';

class BannerHome extends Component {
  render() {
    return (
      <div className="banner">
        <Row className="banner-intro nomargin">
          <Col lg={6} className="banner-intro">
            <h1>Gavin Quirk</h1>
            <h2>Full-Stack Developer</h2>
          </Col>
          <Col lg={6}>

          </Col>
        </Row>
      </div>
    );
  }
}

export default BannerHome;
