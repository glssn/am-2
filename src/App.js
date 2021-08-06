import './App.css';
import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  Card
} from "react-bootstrap"
import instance from './axios.setup';
// import ModalForm from "./ModalForm"

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      emails: []
    };
  }

  componentDidMount() {
      instance({
        url: '/users',
        method: 'get'
      })
        .then(res => {
          //console.log("res", res)
          var users = []
          res.data.forEach(function(user){
            users.push(user.fullname)
          });

          //debugger
          this.setState({ users });
        })
        .catch(error => {
          console.log((error));
        });
      instance
        .get(
          "/emails"
        )
        .then(res => {
          //console.log("res", res)
          var emails = []
          res.data.forEach(function(user){
            emails.push(user.email)
          });
          //debugger
          this.setState({ emails });
        })
        .catch(error => {
          console.log((error));
        });
  }

  render() {
    return(
      <div className="App">
            <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100" style={{
              maxWidth: "22em"
            }}>
            <Card>
            <h2>users in system:</h2>
            
            <ListGroup variant="flush">
              {this.state.users.map(name => {
                return <ListGroup.Item>{name}</ListGroup.Item>
              })}
            </ListGroup>
          </Card>
          </div>
            </Container>
            <Container className="d-flex align-items-center justify-content-center">
              <div className="w-100" style={{
                  maxWidth:"22em"
                }}>
                <Card>
            <h2>Current emails registered</h2>

            {this.state.emails.map(email => {
              return <li>{email}</li>
            })}
            </Card>
          </div>
            </Container>
      </div>

    );
  }
}

export default App;
