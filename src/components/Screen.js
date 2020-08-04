import React, { Component } from 'react';
// import Menu from './Menu';
// import Games from './Games';
// import Setting from './Setting';
// import Coverflow from './Coverflow';
import Music from './Music';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    return (
      <div className="screen-container">
        {/* <Menu /> */}
        {/* <Games /> */}
        {/* <Setting /> */}
        {/* <Coverflow /> */}
        <Music />
      </div>
    );
  }
}

export default Screen;
