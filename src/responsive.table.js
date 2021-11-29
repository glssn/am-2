import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Table  } from 'react-bootstrap'
import { Rate } from 'antd'
import { FrownTwoTone, MehTwoTone, SmileTwoTone } from '@ant-design/icons';
import { db } from './firebase'
import {fromUnixTime, format} from 'date-fns'

export default function TableExample(props) {
  const [allotments, setAllotments] = useState([])
  const [loading, setLoading] = useState(false)
  const customIcons = {
    1: <FrownTwoTone twoToneColor="#c4281a" />,
    2: <MehTwoTone />,
    3: <SmileTwoTone twoToneColor="#52c41a"/>
  };
  const fetchAllotments = async() => {
      setLoading(true)
      const allAllotments = []
      const response = db.collection("allotments")
                      .orderBy("id");              
      const data = await response.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {              
              allAllotments.push(doc.data())
              console.log(doc.data())
          } else {
              console.log("No such document!");
          }
      })}).catch((error) => {
          console.log("Error getting document:", error);
      });
      console.log("allallotments:", allAllotments);
      setAllotments(allAllotments);
      setLoading(false)
    }

  useEffect(() => {
    fetchAllotments();
  }, [])

  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Allotment</th>
      <th>Owner</th>
      <th>Last Inspection</th> 
      {/* ^^^ Date, with hyperlink to /inspection/<id>, and with icon for result red amber green */}
      <th>Allocated date</th>
    </tr>
  </thead>
  <tbody>
    {
      !loading && 
      allotments && 
      allotments.map((allotment, i) => {
        return(
          <tr key={i}>
            <td>{allotment.id && <Link to = {{pathname: `/allotment/${allotment.id}`}}>{allotment.id}</Link>}</td>
            <td>{allotment.owner && <Link to={{pathname: `/user/${allotment.ownerid}`}}>{allotment.owner}</Link>}</td>
            <td>{allotment.lastinspectiondate &&
            <Link to={{pathname: `/inspection/${allotment.lastinspectionid}`}} >
              <div>
                {customIcons[allotment.lastinspectionresult]}
                {format(fromUnixTime(allotment.lastinspectiondate.seconds), "dd MMMM yyyy")}
                </div>
            </Link>}
            </td>
            <td>{allotment.allocated_date && format(fromUnixTime(allotment.allocated_date.seconds), "dd MMMM yyyy")}</td>
          </tr>
        )
      })
    }
  </tbody>
</Table>
  );
}
