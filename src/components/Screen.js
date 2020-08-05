import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Games from './Games';
import Setting from './Setting';
import Coverflow from './Coverflow';
import Music from './Music';
import Artist from './Artist';
import Album from './Album';
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
        {activeComponent === 'Artist' && <Artist />}
        {activeComponent === 'Album' && <Album />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeComponent: state.component.activeComponent,
    activeItem: state.component.activeItem,
  };
}
export default connect(mapStateToProps)(Screen);
