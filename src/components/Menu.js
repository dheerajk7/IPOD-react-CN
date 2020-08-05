import React, { Component } from 'react';
import '../assets/css/common.css';
import '../assets/css/menu.css';

class Menu extends Component {
  render() {
    const { activeItem } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu">
          <div className="menu-heading">IPOD</div>
          <ul className="menu-list-container">
            {activeItem === 'Coverflow' ? (
              <li className="menu-list-item active">Coverflow</li>
            ) : (
              <li className="menu-list-item">Coverflow</li>
            )}
            {activeItem === 'Music' ? (
              <li className="menu-list-item active">Music</li>
            ) : (
              <li className="menu-list-item">Music</li>
            )}
            {activeItem === 'Games' ? (
              <li className="menu-list-item active">Games</li>
            ) : (
              <li className="menu-list-item">Games</li>
            )}
            {activeItem === 'Setting' ? (
              <li className="menu-list-item active">Setting</li>
            ) : (
              <li className="menu-list-item">Setting</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
