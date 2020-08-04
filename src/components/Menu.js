import React, { Component } from 'react';
import '../assets/css/common.css';
import '../assets/css/menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Music',
    };
  }

  render() {
    return (
      <div className="menu-container screen-item-container">
        <div className="menu">
          <div className="menu-heading">IPOD</div>
          <ul className="menu-list-container">
            {this.state.activeItem === 'Overflow' ? (
              <li className="menu-list-item active">Overflow</li>
            ) : (
              <li className="menu-list-item">Overflow</li>
            )}
            {this.state.activeItem === 'Music' ? (
              <li className="menu-list-item active">Music</li>
            ) : (
              <li className="menu-list-item">Music</li>
            )}
            {this.state.activeItem === 'Games' ? (
              <li className="menu-list-item active">Games</li>
            ) : (
              <li className="menu-list-item">Games</li>
            )}
            {this.state.activeItem === 'Setting' ? (
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
