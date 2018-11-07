import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'

class Navigation extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar brand='logo' right className="black">
          <NavItem href='/portfolio'><Icon>view_module</Icon></NavItem>
          <NavItem href='/contact'><Icon>view_module</Icon></NavItem>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;