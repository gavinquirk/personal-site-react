import React, { Component } from 'react';
import './Artallus.css'
import { Row, Col } from 'reactstrap'

class Artallus extends Component {

  render() {

    return (
      <Row className="nomargin UCI section">
        <Col lg={6} className="image-section">
          <img className="logo" src="images/Artallus-Logo.png" alt="Artallus Logo"/>
        </Col>
        <Col lg={6}>
          <div className="nar">
            <h1 className="nar-p">I became an intern at Artallus in Aug 2018</h1>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Artallus;
