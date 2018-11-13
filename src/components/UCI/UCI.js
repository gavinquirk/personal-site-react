import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron } from 'reactstrap';
import './UCI.css'

class UCI extends Component {

  render() {

    return (
        <Row className="nomargin UCI">
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <div className="badge">
                  <img src="images/badge_html_css.png" />
                </div>
              </Col>
              <Col lg={4}>
                <div className="badge">
                  <img src="images/badge_javascript_jquery.png" />
                </div>
              </Col>
              <Col lg={4}>
                <div className="badge">
                  <img src="images/badge_react.png" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={1}></Col>
              <Col lg={4}>
                <div className="badge">
                  <img src="images/badge_node_express.png" />
                </div>
              </Col>
              <Col lg={2}></Col>
              <Col lg={4}>
                <div className="badge">
                  <img src="images/badge_sql_nosql.png" />
                </div>
              </Col>
              <Col lg={1}></Col>
            </Row>
          </Col>

          <Col lg={6}>
            <div className="nar">
              <h1 className="nar-p">I graduated from the Full-Stack Development Bootcamp at UCI in Jul 2018</h1>
            </div>
          </Col>
        </Row>
    );
  }
}

export default UCI;
