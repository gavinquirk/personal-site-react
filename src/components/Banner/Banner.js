import React, { Component } from 'react';
import './Banner.css'
import { Row, Col } from 'reactstrap';

class Banner extends Component {
  render() {

    const bannerUrl = this.props.bannerUrl

    return (
      <div className="Banner">
        <Row>
          <Col lg="12" sm="6">
            <img src={bannerUrl} className="bannerImage" alt="Mushroom"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Banner;
