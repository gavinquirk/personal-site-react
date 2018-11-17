import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import { Row, Col } from 'reactstrap';
import './Contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        {/* <Navigation /> */}
        <Row>
          <Col className="contact-intro" lg="12" sm="12" >
            <h2>Contact Me</h2>
          </Col>
        </Row>
        <Row className="section">
          <Col className="section-title" lg="6" sm="12" >
            <h4>Email</h4>
          </Col>
          <Col className="section-title" lg="6" sm="12" >
            <h4>Social Media</h4>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
