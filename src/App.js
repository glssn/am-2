import './App.css';
import React, { Component } from 'react';
import {
  Container,
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
          const emails = res.data
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
            <Container p='4'>
            <h2>users in system:</h2>
            <ul dangerouslySetInnerHTML={{__html: this.state.users}}>
            </ul>
            </Container>
            <Container p='4'>
            <h2>Current emails registered</h2>
            <ul dangerouslySetInnerHTML={{__html: this.state.emails}}>
            </ul>
            </Container>
      </div>
    );
  }
}

export default App;
