import React, { Component } from 'react';
// import Menu from './Menu';
// import Games from './Games';
import Setting from './Setting';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-container">
        {/* <Menu />
        <Games /> */}
        <Setting />
      </div>
    );
  }
}

export default Screen;
