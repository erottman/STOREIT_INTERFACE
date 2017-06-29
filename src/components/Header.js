import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem, Glyphicon} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <Navbar collapseOnSelect>
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
              <NavItem><Link className="nav-link" to="/facilities">Facilities</Link></NavItem>
              {this.props.isLoggedIn === true ? <NavItem><Link className="nav-link" to="/login">LogOut</Link></NavItem>
              : <NavItem><Link className="nav-link" to="/login">LogIn</Link></NavItem>}
              <NavItem><Link className="nav-link" to="/shoppingcart"><Glyphicon glyph="search"/>{this.props.numberOfItems}</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}
export default Header;
