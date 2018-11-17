import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import PortfolioCard from '../../components/PortfolioCard'
import Projects from './projects.js'
import { Row, Col } from 'reactstrap';
// import pic from './portfolioImages/fictionaluniversity_640_320.png'
// import pic from 'public/images/fictionaluniversity_640_320.png'

import './reset.css'
import './Portfolio.css'

class Portfolio extends Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: Projects.data })
  }

  render() {

    return (
      <div className="Portfolio">
        <Navigation />
        <Row>
          <Col className="page-title" lg="12" sm="12" >
            <h2>My Portfolio</h2>
          </Col>
        </Row>
        <ul id="rig">
          {
            this.state.projects.map(function (project, i) {
              return (
                <li> 
                <a class="rig-cell" href={project.deployed}>
                  <img class="rig-img" src={project.image} />
                  <span class="rig-overlay"></span>
                  <span class="rig-text">{project.title}</span>
                </a>
              </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Portfolio;
