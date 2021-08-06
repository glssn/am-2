import React, { useState } from 'react';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

export default function Profile() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to log out')
    }
  }

  return(
    <>
      <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{
        maxWidth: "22em"
      }}>
      <Card className="d-flex align-items-center justify-content-center mb-4" style = {{maxWidth: "24em"}}>
      <Card.Body>
        <h2>Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3"><FaUserEdit /> Update profile</Link>
      </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      <Button variant="secondary" onClick={handleLogout}><BiLogOut /> Log out</Button>
      </div>
      </div>
      </Container>
    </>
  )
}
