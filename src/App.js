import './App.css';
import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  Card
} from "react-bootstrap"
import instance from './axios.setup';
import {auth, db} from './firebase';
// import  { collection, getDocs } from 'firebase/firestore';
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
    console.log("getting users snapshot")
      var first = db.collection("users")
                  // .doc(auth.currentUser.uid)
                  .limit(25)
      // first.get().then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     if (doc.exists) {
      //         console.log("Document data:", doc.data());
      //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //     }
      // })}).catch((error) => {
      //     console.log("Error getting document:", error);
      // });                  
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
              homepage content
          </div>
            </Container>
      </div>

    );
  }
}

export default App;
