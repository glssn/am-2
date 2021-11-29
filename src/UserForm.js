import React, { useState, useRef } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Steps, Descriptions } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FaUserPlus, FaLeaf, FaFileSignature } from "react-icons/fa"
import 'antd/dist/antd.css';
import instance from './axios.setup'

const UserForm = props => {
  const formRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()

  const state = {
    name: '',
    email: '', 
    
  }

  const [error, setError] = useState('')
  const [checked, setChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const [data, setData] = useState()

  const initialInputState = { fullname: "", email: "",
parish: "false", phone: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  // const {fullname, email, parish, phone} = eachEntry
  const handleInputChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setEachEntry({ ...eachEntry, [e.target.name]: value })
  };

  const handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  }

  const hasAllotment = false;
  const { Step } = Steps;
  const ContactStep = (e) => {
    return (
      <>
        <Form.Group id="fullname">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            ref={nameRef}
          />
        </Form.Group>
        <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
          />
        </Form.Group>
        <Form.Group id="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            ref={phoneRef}
          />
        </Form.Group>
      </>
    )
  }
  const AllotmentsStep = () => {
    return (
      <>
        <Form.Group id="parish">
          <label onClick={() => {
              setChecked(!checked)
            }}>
          <Form.Check
            type="checkbox"
            label="Probus parish member"
            checked={checked}
            onChange={() => {
              setChecked(!checked)
            }}
          />
          </label>
        </Form.Group>
      </>
    )
  }
  const ConfirmStep = () => {
    return (
      <>
        <Descriptions title="Registration Details" bordered>
          <Descriptions.Item label="Name">{nameRef.current && nameRef.current.value}</Descriptions.Item>
          <Descriptions.Item label="Email">{emailRef.current && emailRef.current.value}</Descriptions.Item>
          <Descriptions.Item label="Phone">{phoneRef.current && phoneRef.current.value}</Descriptions.Item>
          { hasAllotment && 
           <Descriptions.Item label="Name">{eachEntry.fullname}</Descriptions.Item>
           }
        </Descriptions>
      </>
    )
  }

  const steps = [
    {
      title: 'Contact',
      content: <ContactStep />,
      icon: <FaUserPlus />,
    },
    {
      title: 'Allotments',
      content: <AllotmentsStep />,
      icon: <FaLeaf />,
    },
    {
      title: 'Confirm',
      content: <ConfirmStep />,
      icon: <FaFileSignature />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0)
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  }
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  }
  const onChangeStep = current => {
    setCurrentStep(current);
    // console.log(emailRef.current, nameRef.current, phoneRef.current)
    console.log("email:", emailRef.current && emailRef.current.value)
    console.log("name:", nameRef.current && nameRef.current.value)
    console.log("phone:", phoneRef.current && phoneRef.current.value)
    console.log("parish:", checked)
  }
  // const [state, setState] = useState({
  //   fullname: "",
  //   email: "",
  //   parish: "",
  //   phone: ""
  // });

  async function handleSubmit(event) {
    event.preventDefault()
    // console.log(eachEntry);
    try {
      setError('')
      setLoading(true)
      // await form submit
      // history.push("/")
      console.log("name: %s", nameRef.current.value)
      console.log("email: %s", emailRef.current.value)
    } catch {
      setError('Failed to register')
    }
    setLoading(false)
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Steps size="small" current={currentStep} onChange={onChangeStep}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} icon={item.icon} status={item.status}/>
        ))}
      </Steps>
      <Form ref={formRef} className="register-form" onSubmit={handleSubmit}>
      <div className="steps-content">{steps[currentStep].content}</div>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
        { currentStep > 0 &&
          <Button onClick={prevStep}>Back</Button>}
          </Col>
          <Col>
        { currentStep < 2 && 
          <Button onClick={nextStep}>Next</Button>}
        { currentStep == 2 && 
          <Button onClick={handleSubmit}>Register</Button>}
          </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default UserForm;
