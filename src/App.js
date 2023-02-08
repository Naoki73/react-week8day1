import React, { Component } from 'react';
import Home from './Home';
import Nav from './Nav'
import Login from './Login';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      test: 0
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        
        
        <Home />

        <Login />

      </div>
    )
  }
}



