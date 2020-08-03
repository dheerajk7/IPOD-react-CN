import React, { Component } from 'react';
import '../assets/css/ipod.css';
import Screen from './Screen';
import Buttons from './Buttons';

class Ipod extends Component {
  render() {
    return (
      <div className="container">
        <Screen />
        <Buttons />
      </div>
    );
  }
}

export default Ipod;
