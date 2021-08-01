import React from "react";
import { Navbar,Nav,Container,Button,Form } from 'react-bootstrap'

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
            <Form >
              <Button href="/login" className="mr-1">Log in</Button>{' '}
              <Button variant="outline-primary" href="/signup" className="mr-2">Sign up</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}

export default Header
