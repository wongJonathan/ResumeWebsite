import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
class NavBar extends Component {
  render() {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="/">Jonathan Wong</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} href="/">
                Home
                </NavItem>
                <NavItem eventKey={2} href="#">
                Experience
                </NavItem>
                <NavItem eventKey={3} href="#">
                Personal Projects
                </NavItem>
                <NavItem eventKey={4} href="/resume">
                Resume
                </NavItem>
            </Nav>
        </Navbar>
    )
  }
}
export default NavBar;