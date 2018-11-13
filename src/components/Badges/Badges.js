
import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './Badges.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'



class Badges extends Component {
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
      <div className="Badges">
        <div className="title">
            <h2>Graduate of the UCI Full-Stack Bootcamp<FontAwesomeIcon className="toggleBtn plusBtn" onClick={this.toggle} icon={faPlusSquare} /></h2>
            <hr />
        </div>
        <Collapse isOpen={this.state.collapse}>
          <div className="badges-section">
            <div className="badges-intro">
              <h1>Badges</h1>
            </div>
            <div className="badges-display">
              <div className="badge">
                <img src="images/badge_html_css.png" />
              </div>
              <div className="badge">
                <img src="images/badge_javascript_jquery.png" />
              </div>
              <div className="badge">
                <img src="images/badge_react.png" />
              </div>
              <div className="badge">
                <img src="images/badge_node_express.png" />
              </div>
              <div className="badge">
                <img src="images/badge_sql_nosql.png" />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Badges;
