import React from "react";
import { Navbar,Nav,Container } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return(
      <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Probus Allotments</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/allotments">Allotments</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
