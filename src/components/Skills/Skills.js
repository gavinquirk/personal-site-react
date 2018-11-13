
import React, { Component } from 'react';
import { Collapse, Row, Col } from 'reactstrap';
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="Skills">
        <div className="title">
          <h2>My Favorite Tools<FontAwesomeIcon className="toggleBtn plusBtn" onClick={this.toggle} icon={faPlusSquare} /></h2>
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div className="skills">
            <Row className="nomargin">
              <Col lg={4} sm={12} className="nomargin">
                <div className="skills-section nomargin">
                  <h4 className="skills-section-title">MERN Stack</h4>
                  <img src="/images/slackoverflow_640_320.png" />
                </div>
              </Col>
              <Col lg={4} sm={12} className="nomargin">
                <div className="skills-section nomargin">
                  <h4 className="skills-section-title">Wordpress</h4>
                  <img src="/images/fictionaluniversity_640_320.png" />
                </div>
              </Col>
              <Col lg={4} sm={12} className="nomargin">
                <div className="skills-section nomargin">
                  <h4 className="skills-section-title">Meteor</h4>
                  <img src="/images/fictionaluniversity_640_320.png" />
                </div>
              </Col>
            </Row>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Skills;










