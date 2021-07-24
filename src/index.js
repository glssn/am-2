import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Header from './Header';
import Allotments from './allotments';
import Users from './Users'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  // <ChakraProvider>
  <React.StrictMode>
  <BrowserRouter>
  <Header />
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/allotments" component={Allotments} />
      <Route path="/users" component={Users} />
      <Route path="/waiting" component={App} />
      <Route component={App} />
    </Switch>
  </div>
  </BrowserRouter>
  </React.StrictMode>,
  // </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
