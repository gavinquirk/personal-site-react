import React, { Component } from 'react';
import Navigation from '../../components/Navigation'
import Banner from '../../components/Banner'
import PortfolioCard from '../../components/PortfolioCard'
import Projects from './projects.js'
import { Row, Col } from 'react-materialize'
import './reset.css'
import './Portfolio.css'

class Portfolio extends Component {

  state = {
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: Projects.data })
  }

  // {
  //   this.state.projects.map(function (project, i) {
  //     return (
  //       <Col s={4} className='grid-example'>
  //         <PortfolioCard />
  //       </Col>
  //     )
  //   })
  // }


  render() {
    // console.log(this.state)

    return (
      <div>
        <Navigation />
        <section class="cards">

          {
            this.state.projects.map(function (project, i) {
              return (
                <article>
                  <img class="article-img" src="http://placekitten.com/305/205" alt=" " />
                  <h1 class="article-title">
                    {project.title}
                  </h1>
                </article>
              )
            })
          }
          </section>
          {/* <header>
          <img class="logo" src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/111/crystal-ball_1f52e.png" alt="heart" />
          <h1 class="heading">Grid into the future</h1>
        </header> */}

      </div>
        );
      }
    }
    
    export default Portfolio;
