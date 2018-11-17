import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'react-materialize';
import './SelfTaught.css'

class SelfTaught extends Component {

  render() {

    return (
      <Row className="nomargin SelfTaught section">
        <Col lg={6}>
          {/* TODO: List Icons of Self Taught */}
          <Row>
              <Col lg={4}>
                <img className="st-image" src="images/wordpress_500_500.png" />
              </Col>
              <Col lg={4}>
                <img className="st-image" src="images/php_512_512.png" />
              </Col>
              <Col lg={4}>
                <img className="st-image" src="images/docker_512_512.png" />
              </Col>
          </Row>


        </Col>
        <Col lg={6}>
          <div className="nar">
            <h1 className="nar-p">I have taught myself how to use:
            <ul className="nar-list">
                <li>Wordpress</li>
                <li>PHP</li>
                <li>Docker</li>
              </ul>
            </h1>


          </div>
        </Col>
      </Row>
    );
  }
}

export default SelfTaught;
