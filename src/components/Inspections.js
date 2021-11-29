import React, { Component, useState, useEffect } from 'react';
import { Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { Spin, Descriptions, List } from 'antd';
import { FaUserEdit } from 'react-icons/fa'
import fromUnixTime from 'date-fns/fromUnixTime'

import { auth, db } from '../firebase'


export default function Inspections() {
    

  const state = {
    recent: {
      1: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      2: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      3: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      4: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      5: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      6: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      7: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      },
      8: {
        allotment: '',
        result: '',
        date: '',
        inspector: ''
      }
    },
    upcoming: {

    },
    recentdates: []
  }
  const [inspections, setInspections] = useState([])
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState([])
  const fetchRecent = async() => {
      setLoading(true)
      const recentInspections = inspections;
      const response = db.collection("inspections")
                      .orderBy("date", "desc")
                      .limit(8);                    
      // const data = await response.get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     if (doc.exists) {              
      //         recentInspections.push(doc.data())
      //     } else {
      //         console.log("No such document!");
      //     }
      // })}).catch((error) => {
          // console.log("Error getting document:", error);
      // });
      setInspections(recentInspections)
      console.log(inspections)
      setLoading(false)
    }

    useEffect(() => {
      fetchRecent();
    }, [])
    
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
        {loading && <Spin />}
        {!loading && <List>
          {inspections && inspections.map((inspection, i) => {
            return (
              <List.Item key={i}>
                {inspection.allotment}
                {/* <List.Item.Meta 
                  title={<a href="https://probusallotments.co.uk/allotments/">Allotment {inspection.allotment}</a>}
                  // description={"`Date: {fromUnixTime(inspection.date)}`"}
                /> */}
              </List.Item>
            )
          })}
        </List>}
        </div>        
      </Card.Body>
      </Card>
      <Card className="d-flex align-items-center justify-content-center mb-4" style = {{maxWidth: "24em"}}>
      <Card.Body>
        <h2>Upcoming</h2>     
        
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3"><FaUserEdit /> Update profile</Link>
      </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      </div>
      </div>
      </Container>
      <Link
      to = {{
        pathname: `/inspections/${date.date}`
      }}>
        {console.log(date)}
        <Button>New inspection</Button>
      </Link>
    </>
  )
}
