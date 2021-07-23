import './App.css';
import React, { Component } from 'react';
import {
  Box,
  Divider,
  } from "@chakra-ui/react"
import axios from 'axios';
import ModalForm from './ModalForm'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      emails: []
    };
  }

  componentDidMount() {
      axios
        .get(
          "http://localhost:5000/users"
        )
        .then(res => {
          //console.log("res", res)
          const users = res.data
          //debugger
          this.setState({ users });
        })
        .catch(error => {
          console.log((error));
        });
      axios
        .get(
          "http://localhost:5000/emails"
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
            <Box p='4'>
            <h2>users in system:</h2>
            <ul dangerouslySetInnerHTML={{__html: this.state.users}}>
            </ul>
            </Box>
            <Divider />
            <Box p='4'>
            <h2>Current emails registered</h2>
            <ul dangerouslySetInnerHTML={{__html: this.state.emails}}>
            </ul>
            </Box>
        <ModalForm />
      </div>
    );
  }
}

export default App;
