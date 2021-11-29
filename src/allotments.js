import React from "react";
// import { Button } from "antd";
// import { MapContainer, TileLayer, Circle, CircleMarker, Popup, Polyline, Polygon, Rectangle } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
import './index.css';
import {Button} from 'react-bootstrap';
import { Row, Col } from "react-flexbox-grid";
import ResponsiveTable from './responsive.table';
// import Dashchart from "./components/dashchart";

// const { Option } = Select;

//This file contains the data maange for the dashchart and the display of ui elements on the dashboard.
class Allotments extends React.Component {
    render () {

      return(
        <>
          <Col xs />
          <Col xs>
            <ResponsiveTable/>
          </Col>
          <Col xs />
          
        </>
    )
    }
  }

export default Allotments;
