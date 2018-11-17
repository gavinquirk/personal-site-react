import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import { Row, Col } from 'reactstrap';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Navigation />
        <Row>
          <Col className="page-title" lg="12" sm="12" >
            <h2>Contact Me</h2>
          </Col>
        </Row>
        <Banner bannerUrl={"/images/computer_use_leaderboard.jpg"} />
        <Row>
          <Col className="section-title" lg="6" sm="12" >
            <h4>Email Me</h4>
            <h5>gavinquirk@gmail.com</h5>
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
