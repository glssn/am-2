import React, { useState, useEffect } from "react";
// import { Button } from "antd";
// import { MapContainer, TileLayer, Circle, CircleMarker, Popup, Polyline, Polygon, Rectangle } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import './index.css';
import {Button, Container, Image, Card, ListGroup} from 'react-bootstrap';
import {Descriptions, Empty} from 'antd'
import { Row, Col } from "react-flexbox-grid";
import {FaEdit} from 'react-icons/fa'
import ResponsiveTable from './responsive.table';
// import Dashchart from "./components/dashchart";

// const { Option } = Select;

//This file contains the data maange for the dashchart and the display of ui elements on the dashboard.
export default function Allotment(props) {
    
  const {id} = props.match.params    
  
      const [loading, setLoading] = useState(false)
      const delay = ms => new Promise(res => setTimeout(res, ms));
      console.log("on allotment page for allotment id:", id)

      
      return(
        <>
          <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{
              maxWidth: "48em"
            }}>
            <h2>Allotment {id}</h2>
            {/* <img src="holder.js/90px250" rounded /> */}
            map of position of allotment (coming soon)
            <Card className="d-flex align-items-center justify-content-center mb-4" style = {{maxWidth: "36em"}}>
              <Card.Title>Details</Card.Title>
              <Card.Body>
            <ListGroup title="Details" bordered>
              <ListGroup.Item label="name"><b>Owner name</b>: {"Firstname Lastname"}</ListGroup.Item>
              <ListGroup.Item label="allocated"><b>Date allocated</b>: {"27 Nov 2001"}</ListGroup.Item>
              <ListGroup.Item label="inspection"><b>Last inspection date</b>: {"27 Nov 2021"}</ListGroup.Item>
            </ListGroup>
            <Link to={{pathname: `/allotment/${id}/edit`, query: {allotment: {id}}}}>
              <Button><FaEdit />{" "}Edit details</Button>
            </Link>
            </Card.Body>
            </Card>
            <Row>
            <Col>
            <Link to={{pathname: `/inspection/new`, query: {allotment: {id}}}}>
              <Button>New inspection</Button>
            </Link>
            </Col>
            <Col>
            <br />
            <Button disabled={false}>Recent inspections</Button>
            </Col>
            </Row>
            {loading && <Empty />}
            </div>
          </Container>
          
        </>
    )
    }
