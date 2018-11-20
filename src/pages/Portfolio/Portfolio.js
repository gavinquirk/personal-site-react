import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Projects from './projects.js'
import { Row, Col, Button } from 'reactstrap';
// import pic from './portfolioImages/fictionaluniversity_640_320.png'
// import pic from 'public/images/fictionaluniversity_640_320.png'

import './reset.css'
import './Portfolio.css'

class Portfolio extends Component {

  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     tooltipOpen: false,
  //     projects: []
  //   };
  // }

  // toggle() {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }

  state = {
    tooltipOpen: false,
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: Projects.data })
  }

  render() {

    const deployChecker = (deploy) => {
      return (deploy ? <Button className="project-button" href={deploy} target="_blank">Deployment</Button> : "")
    }

    const githubChecker = (github) => {
      return (github ? <Button className="project-button" href={github} target="_blank">Github</Button> : "")
    }

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
                    <img class="rig-img" src={project.image} alt={project.title}/>
                    <span class="rig-overlay"></span>
                    <div class="rig-text">
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                      {githubChecker(project.github)}
                      {deployChecker(project.deployed)}
                       {/* NOT WORKING -- ICONS WITH TOOLTIP */}
                      {/* <i class="fab fa-github-square"></i>
                      <i class="far fa-window-maximize"></i>
                      <div>
                        <p>Sometimes you need to allow users to select text within a <span style={{ textDecoration: "underline", color: "blue" }} href="#" id="DisabledAutoHideExample">tooltip</span>.</p>
                        <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                          Try to select this text!
                        </Tooltip>
                      </div> */}
                    </div>
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
