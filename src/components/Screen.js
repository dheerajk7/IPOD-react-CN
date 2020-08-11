import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import Games from './Games';
import Setting from './Setting';
import Coverflow from './Coverflow';
import Music from './Music';
import Artist from './Artist';
import Album from './Album';
import Playing from './Playing';
import MoreSettings from './MoreSettings';
import Themes from './Themes';
import '../assets/css/screen.css';

// render screen of IPOD
// depend on different active component in received from props these will set the component on screen
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
        {activeComponent === 'All Music' && <Playing />}
        {activeComponent === 'More Settings' && <MoreSettings />}
        {activeComponent === 'Themes' && <Themes />}
      </div>
    );
  }
}

// mapping activeComponent and activeItem from store to the props of screen
function mapStateToProps(state) {
  return {
    activeComponent: state.component.activeComponent,
    activeItem: state.component.activeItem,
  };
}

// connecting props from store to screen
export default connect(mapStateToProps)(Screen);
