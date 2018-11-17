import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
  import './Navigation.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar text-white" light expand="md">
          <NavbarBrand className="navbrand text-white" href="/">gavinquirk.com</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="navlink text-white" href="/portfolio/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink text-white" href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink text-white" href="https://github.com/gavinquirk" target="_blank">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink text-white" href="https://www.linkedin.com/in/gavin-quirk/" target="_blank">Linkedin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}