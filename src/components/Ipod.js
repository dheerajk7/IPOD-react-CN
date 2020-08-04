import React, { Component } from 'react';
import '../assets/css/ipod.css';
import Screen from './Screen';
import Buttons from './Buttons';

class Ipod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: 'Games',
      activeItem: 'Album',
    };
  }

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
