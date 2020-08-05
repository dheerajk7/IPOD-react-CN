import React, { Component } from 'react';
import '../assets/css/common.css';
import '../assets/css/menu.css';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  render() {
    return (
      <div className="menu-container screen-item-container">
        <div className="menu">
          <div className="menu-heading">Music</div>
          <ul className="menu-list-container">
            {this.state.activeItem === 'All Music' ? (
              <li className="menu-list-item active">All Music</li>
            ) : (
              <li className="menu-list-item">All Music</li>
            )}
            {this.state.activeItem === 'Artist' ? (
              <li className="menu-list-item active">Artist</li>
            ) : (
              <li className="menu-list-item">Artist</li>
            )}
            {this.state.activeItem === 'Album' ? (
              <li className="menu-list-item active">Album</li>
            ) : (
              <li className="menu-list-item">Album</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Music;
