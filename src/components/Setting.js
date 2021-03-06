import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/common.css';

// rendering setting component

class Setting extends Component {
  render() {
    const { activeItem, styles } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu" style={styles.menu}>
          <div className="menu-heading">Setting</div>
          <ul className="menu-list-container">
            {activeItem === 'Themes' ? (
              <li className="menu-list-item active" style={styles.active}>
                Themes
              </li>
            ) : (
              <li className="menu-list-item">Themes</li>
            )}
            {activeItem === 'More Settings' ? (
              <li className="menu-list-item active" style={styles.active}>
                More Settings
              </li>
            ) : (
              <li className="menu-list-item">More Settings</li>
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

export default connect(mapStateToProps)(Setting);
