import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import UserForm from './UserForm'
import instance from './axios.setup'

class Users extends React.Component {
  // const users = [
  //   {
  //     // "id": 1,
  //     "fullname": "John Doe",
  //     "email": "johndoe@abc.com",
  //     "parish": "True",
  //     "phone": "0712876545"
  //   },
  //   {
  //     // "id": 2,
  //     "fullname": "Jane Doe",
  //     "email": "janedoe@abc.com",
  //     "parish": "False",
  //     "phone": "0717672345"
  //   },
  //   {
  //     // "id": 3,
  //     "fullname": "Alice Doe",
  //     "email": "alicedoe@abc.com",
  //     "parish": "False",
  //     "phone": "0712987345"
  //   },
  //   {
  //     // "id": 4,
  //     "fullname": "Bob Doe",
  //     "email": "bobdoe@abc.com",
  //     "parish": "True",
  //     "phone": "0712123445"
  //   }
  // ];
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
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
  }

  render() {

  return(
    <>
    <Container>
    <Row md={4}>
    <Col xs lg="3"/>
    <Col md='6'>
    <div className='UsersList'>
    <h2>Current list of users: </h2>
    <ListGroup>
      {this.state.users.map((users, i) => {
        return(
          <ListGroup.Item
          key={i}
          >
          {users}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
    </div>
    </Col>
    <Col xs lg="3" />
    </Row>
    </Container>
    <Container>
    <Row className="justify-content-md-center">
    <Col xs lg="3" />
    <Col md="6">
      {/* <UserForm /> */}
      </Col>
      <Col xs lg="3" />
    </Row>
    </Container>
    </>
  );
};
}
export default Users;
