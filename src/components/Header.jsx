import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router'
import { Nav, Navbar, NavItem} from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="nav-link" to='/'>STOREit</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <Link className="nav-link" to='/'>Log Out</Link>
          </Nav>
          <Nav pullRight>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header
