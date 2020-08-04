import React, { Component } from 'react';
// import Menu from './Menu';
import Games from './Games';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-container">
        <Games />
      </div>
    );
  }
}

export default Screen;
