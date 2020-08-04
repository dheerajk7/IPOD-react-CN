import React, { Component } from 'react';
import Menu from './Menu';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-container">
        <Menu />
      </div>
    );
  }
}

export default Screen;
