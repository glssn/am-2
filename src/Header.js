import React from "react";
import { Navbar,Nav,Container,Button,Form } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import {FaUser} from 'react-icons/fa'

export default function Header() {
  const {currentUser} = useAuth()
  const username = currentUser ? currentUser.email.substring(0,currentUser.email.indexOf('@')) : ''
    return(
      <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            {/*<img
              src="/heading-small.png"
              height="30"
              className="d-inline-block align-top"
              alt="Probus Allotments logo"/>
              */}
              Probus Allotments
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/allotments">Allotments</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
            {!currentUser ?
            <Form >
              <Button href="/login" className="mr-1">Log in</Button>{' '}
              <Button variant="outline-primary" href="/signup" className="mr-2">Sign up</Button>
            </Form>
            : <Nav><Nav.Link href="/profile"><FaUser /> {username}</Nav.Link></Nav>
          }
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
