import React, { useState, useRef } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)

  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{
      minHeight: "80vh"
    }}>
    <div className="w-100" style={{
      maxWidth: "22em"
    }}>
    <Card>
      <Card.Body>
      <div className="w-100 text-left mb-2">
        <h2 className="text-center mb-4">Sign up</h2>
        Already have an account? <Link to="/login">Log in</Link>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <Form.Group id="password-confirm">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" ref={passwordConfirmRef} required />
          </Form.Group>
          <Button type="submit" disabled={loading} className="w-100 mt-2">Sign up</Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
    </Container>
    </>
  )
};
