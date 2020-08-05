import React, { Component } from 'react';
import Menu from './Menu';
import Games from './Games';
import Setting from './Setting';
import Coverflow from './Coverflow';
import Music from './Music';
import '../assets/css/screen.css';

class Screen extends Component {
  render() {
    const { activeComponent, activeItem } = this.props;
    return (
      <div className="screen-container">
        {activeComponent === 'Coverflow' && <Coverflow />}
        {activeComponent === 'Menu' && <Menu activeItem={activeItem} />}
        {activeComponent === 'Music' && <Music activeItem={activeItem} />}
        {activeComponent === 'Games' && <Games />}
        {activeComponent === 'Setting' && <Setting />}
      </div>
    );
  }
}

export default Screen;
