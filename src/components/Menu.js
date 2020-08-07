import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/common.css';
import '../assets/css/menu.css';

// rendering different menu item to show in menu
// marking active item to be active with red color background using activeItem received in props
class Menu extends Component {
  render() {
    const { activeItem, styles } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu" style={styles.menu}>
          <div className="menu-heading">IPOD</div>
          <ul className="menu-list-container">
            {activeItem === 'Coverflow' ? (
              <li className="menu-list-item active" style={styles.active}>
                Coverflow
              </li>
            ) : (
              <li className="menu-list-item">Coverflow</li>
            )}
            {activeItem === 'Music' ? (
              <li className="menu-list-item active" style={styles.active}>
                Music
              </li>
            ) : (
              <li className="menu-list-item">Music</li>
            )}
            {activeItem === 'Games' ? (
              <li className="menu-list-item active" style={styles.active}>
                Games
              </li>
            ) : (
              <li className="menu-list-item">Games</li>
            )}
            {activeItem === 'Setting' ? (
              <li className="menu-list-item active" style={styles.active}>
                Setting
              </li>
            ) : (
              <li className="menu-list-item">Setting</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    styles: state.theme.menu,
  };
}
export default connect(mapStateToProps)(Menu);
