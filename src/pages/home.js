import React, { Component } from 'react';
import Header from '../components/header/header';
import Greeting from '../components/greeting/greeting';

class Home extends Component {
  render() {
    return (
      <div> 
      <Header/>
      <Greeting/>
      </div>
    );
  }
}

export default Home;
