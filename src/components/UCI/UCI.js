import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import './UCI.css'

class UCI extends Component {

  render() {

    return (
      <Row className="nomargin UCI section">
        <Col lg={6}>
          <Row>
              <Col lg={4} sm={1}>
                <div className="badge">
                  <img src="images/badge_html_css.png" alt="UCI certificate html css"/>
                </div>
              </Col>
              <Col lg={4} sm={1}>
                <div className="badge">
                  <img src="images/badge_javascript_jquery.png" alt="UCI certificate javascript jquery"/>
                </div>
              </Col>
              <Col lg={4} sm={1}>
                <div className="badge">
                  <img src="images/badge_react.png" alt="UCI certificate react"/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={1} sm={1}></Col>
              <Col lg={4} sm={1}>
                <div className="badge">
                  <img src="images/badge_node_express.png" alt="UCI certificate node express"/>
                </div>
              </Col>
              <Col lg={2} sm={1}></Col>
              <Col lg={4} sm={1}>
                <div className="badge">
                  <img src="images/badge_sql_nosql.png" alt="UCI certificate sql nosql"/>
                </div>
              </Col>
              <Col lg={1} sm={1}></Col>
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
