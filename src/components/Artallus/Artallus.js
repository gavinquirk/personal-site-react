import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import './Artallus.css'

class Artallus extends Component {

  render() {

    return (
      <Row className="nomargin UCI section">
        <Col lg={6}>
          <img className="section-image" src="images/Artallus-Logo.png"/>
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
