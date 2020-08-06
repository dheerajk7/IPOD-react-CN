import React, { Component } from 'react';
import '../assets/css/common.css';
import '../assets/css/menu.css';

// rendering different music item to show in music
// marking active item to be active with red color background using activeItem received in props
class Music extends Component {
  render() {
    const { activeItem } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu">
          <div className="menu-heading">Music</div>
          <ul className="menu-list-container">
            {activeItem === 'All Music' ? (
              <li className="menu-list-item active">All Music</li>
            ) : (
              <li className="menu-list-item">All Music</li>
            )}
            {activeItem === 'Artist' ? (
              <li className="menu-list-item active">Artist</li>
            ) : (
              <li className="menu-list-item">Artist</li>
            )}
            {activeItem === 'Album' ? (
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
