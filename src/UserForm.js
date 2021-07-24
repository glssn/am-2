import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import instance from './axios.setup'

const UserForm = props => {
  const initialInputState = { fullname: "", email: "",
parish: "false", phone: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  // const {fullname, email, parish, phone} = eachEntry
  const handleInputChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEachEntry({ ...eachEntry, [e.target.name]: value })
  };

  // const [state, setState] = useState({
  //   fullname: "",
  //   email: "",
  //   parish: "",
  //   phone: ""
  // });


  const handleSubmit = e => {
    console.log(eachEntry);
    instance.post('users', eachEntry)
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Form className="register-form" onSubmit={handleSubmit}>
        <Form.Group controlId="fullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullname"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="parish">
          <Form.Check
            type="checkbox"
            label="Probus parish member"
            name="parish"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button onClick={handleSubmit}>Register</Button>
      </Form>
    </div>
  );
};

export default UserForm;
