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
    console.log(this.state)

    return (
      <div className="Contact">
        <Navigation />
        <div className="portfolio-cards-section">
          {
            this.state.projects.map(function(project, i){
              // console.log(project.title);
              return (
                <PortfolioCard />
              )
            })
          }
        </div>
        <span>Portfolio</span>
      </div>
    );
  }
}

export default Portfolio;
