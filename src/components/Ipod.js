import React, { Component } from 'react';
import '../assets/css/ipod.css';
import Screen from './Screen';
import Buttons from './Buttons';

class Ipod extends Component {
  constructor(props) {
    super(props);
    //using state to maintain active list option and active component
    this.state = {
      activeComponent: 'Menu',
      activeItem: 'Music',
    };
  }

  render() {
    return (
      <div className="container">
        <Screen
          activeComponent={this.state.activeComponent}
          activeItem={this.state.activeItem}
        />
        <Buttons />
      </div>
    );
  }
}

export default Ipod;
