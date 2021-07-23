import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <ChakraProvider>
  <React.StrictMode>
  <BrowserRouter>
  <Header />
  <div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/allotments" component={App} />
      <Route path="/users" component={App} />
      <Route path="/waiting" component={App} />
      <Route component={App} />
    </Switch>
  </div>
  </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
