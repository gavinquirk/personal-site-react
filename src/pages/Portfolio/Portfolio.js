import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import PortfolioCard from '../../components/PortfolioCard'
import Projects from './projects.js'
import { Row, Col } from 'react-materialize'

class Portfolio extends Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: Projects.data })
  }

  render() {

    return (
      <div className="content">
        <div className="card-section">
          <Row>
            {
              this.state.projects.map(function (project, i) {
                return (
                  <Col l={6} m={4} s={1} key={i}>
                    <PortfolioCard project={project}/>
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
