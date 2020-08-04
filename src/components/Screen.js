import React, { Component } from 'react';
import Menu from './Menu';
// import Games from './Games';
// import Setting from './Setting';
// import Coverflow from './Coverflow';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-container">
        <Menu />
        {/* <Games /> */}
        {/* <Setting /> */}
        {/* <Coverflow /> */}
      </div>
    );
  }
}

export default Screen;
