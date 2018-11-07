import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize'

class PortfolioCard extends Component {
  render() {
    return (
      <div className="PortfolioCard">
        <Card header={<CardTitle reveal image={"bob-ross.jpg"} waves='light' />}
          title="Card Title"
          reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p><a href="#">This is a link</a></p>
        </Card>
      </div>
    );
  }
}

export default PortfolioCard;
