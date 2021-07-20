import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/flask/hello'
})

class App extends Component {

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res)
    })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
