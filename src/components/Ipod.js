import React, { Component } from 'react';
import '../assets/css/ipod.css';
import Screen from './Screen';
import Buttons from './Buttons';
import { connect } from 'react-redux';

// renders the main ipod component in two parts
// first part is screen of IPOD which show different component
// second part is button component which perform actions on screen
class Ipod extends Component {
  constructor(props) {
    super(props);
    //using state to maintain active component and  active item in menu or music list
    this.state = {
      activeComponent: 'Menu',
      activeItem: 'Music',
    };
  }

  render() {
    const { styles } = this.props;
    return (
      <div className="container" style={styles}>
        <Screen
          activeComponent={this.state.activeComponent}
          activeItem={this.state.activeItem}
        />
        <Buttons />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    styles: state.theme.ipod_background,
  };
}
export default connect(mapStateToProps)(Ipod);
