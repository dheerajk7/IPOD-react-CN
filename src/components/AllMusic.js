import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/common.css';
import '../assets/css/menu.css';

class AllMusic extends Component {
  render() {
    const { activeItem, styles } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu" style={styles.menu}>
          <div className="menu-heading">Songs</div>
          <ul className="menu-list-container">
            {activeItem === 'She Move' ? (
              <li className="menu-list-item active" style={styles.active}>
                She Move
              </li>
            ) : (
              <li className="menu-list-item">She Move</li>
            )}
            {activeItem === 'Qaafirana' ? (
              <li className="menu-list-item active" style={styles.active}>
                Qaafirana
              </li>
            ) : (
              <li className="menu-list-item">Qaafirana</li>
            )}
            {activeItem === 'Nikle Current' ? (
              <li className="menu-list-item active" style={styles.active}>
                Nikle Current
              </li>
            ) : (
              <li className="menu-list-item">Nikle Current</li>
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
    activeItem: state.component.activeItem,
  };
}

export default connect(mapStateToProps)(AllMusic);
