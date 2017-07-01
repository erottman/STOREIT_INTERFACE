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
          </Nav>
          <Nav pullRight>
            <NavItem><Link className="nav-link" to="/products">Facilities</Link></NavItem>
            {this.props.isLoggedIn === true ? <NavItem><Link className="nav-link" to="/login">LogOut</Link></NavItem>
            : <NavItem><Link className="nav-link" to="/login">LogIn</Link></NavItem>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default Header
