import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/common.css';

class Themes extends Component {
  render() {
    const { activeItem, styles } = this.props;
    return (
      <div className="menu-container screen-item-container">
        <div className="menu" style={styles.menu}>
          <div className="menu-heading">Setting</div>
          <ul className="menu-list-container">
            {activeItem === 'Marshmello' ? (
              <li className="menu-list-item active" style={styles.active}>
                Marshmello
              </li>
            ) : (
              <li className="menu-list-item">Marshmello</li>
            )}
            {activeItem === 'Striker' ? (
              <li className="menu-list-item active" style={styles.active}>
                Striker
              </li>
            ) : (
              <li className="menu-list-item">Striker</li>
            )}
            {activeItem === 'Virtue' ? (
              <li className="menu-list-item active" style={styles.active}>
                Virtue
              </li>
            ) : (
              <li className="menu-list-item">Virtue</li>
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

export default connect(mapStateToProps)(Themes);
