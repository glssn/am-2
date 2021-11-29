import React, { Component, useState, useEffect } from 'react';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import { Descriptions } from 'antd';
import { FaUserEdit } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { auth, db } from '../firebase'


export default function Inspection() {
    
  const { state } = useLocation();

    return(
    <>
      <Container className="d-flex align-items-center justify-content-center">
      <div className="w-100" style={{
        maxWidth: "22em"
      }}>
      <Card className="d-flex align-items-center justify-content-center mb-4" style = {{maxWidth: "24em"}}>
      <Card.Body>
        <h2>Recent inspections</h2>        
        <div>
        <Descriptions>
          <Descriptions.Item>{state.id}</Descriptions.Item>
        </Descriptions>
        </div>        
      </Card.Body>
      </Card>
      </div>
      </Container>
      <Container className="d-flex align-items-center">
        <Button>New inspection</Button>
      </Container>
    </>
  )
}
