import React, { Component } from 'react';
import './Banner.css'
import { Row, Col } from 'react-materialize';

class Banner extends Component {
  render() {

    const bannerUrl = this.props.bannerUrl

    return (
      <div className="Banner">
        <Row>
          <Col lg="12" sm="6">
            <img src={bannerUrl} className="bannerImage" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
