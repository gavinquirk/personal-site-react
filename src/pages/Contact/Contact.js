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
          <Col className="contact-section" lg="6" sm="12" >
            <h2 className="contact-section-title">Email</h2>
            <h4>The best way to contact me is by email at</h4>
            <h5>gavinquirk.work@gmail.com</h5>
          </Col>
          <Col className="contact-section" lg="6" sm="12" >
            <h2 className="contact-section-title">Social Media</h2>
            <h4>You can also find me online</h4>
            <h5>gavinquirk.work@gmail.com</h5>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
