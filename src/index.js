import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Header from './Header';
import Allotments from './allotments';
import Allotment from './allotment';
import Users from './Users'
import Signup from './components/Signup'
import Login from './components/Login'
import Inspections from './components/Inspections'
import Inspection from './components/Inspection'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import reportWebVitals from './reportWebVitals';
import Waitlist from './components/Waitlist'

import 'bootstrap/dist/css/bootstrap.min.css';
// import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  // <ChakraProvider>
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <PrivateRoute exact path="/" component={App} />
            <Route path="/allotments" component={Allotments} />
            <Route exact path="/allotment/:id" component={Allotment} />
            <Route path="/users" component={Users} />
            <Route path="/waitlist" component={Waitlist} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/inspections" component={Inspections} />
            <PrivateRoute exact path="/inspections/:id" component={Inspection} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    </AuthProvider>
    </React.StrictMode>,
  // </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
