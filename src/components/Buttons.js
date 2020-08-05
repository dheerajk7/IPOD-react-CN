import React, { Component } from 'react';
import '../assets/css/buttons.css';
import { connect } from 'react-redux';
import { changeComponent } from '../actions/changeComponent';

class Buttons extends Component {
  changeComponentToMenu = () => {
    this.props.dispatch(changeComponent('Menu'));
  };

  changeComponent = () => {
    const { dispatch } = this.props;
    const { activeComponent, activeItem } = this.props.component;
    if (activeComponent === 'Menu' || activeComponent === 'Music') {
      dispatch(changeComponent(activeItem));
    }
  };

  render() {
    return (
      <div className="button-container">
        <div className="button-region-container">
          <div className="inner-button-container">
            <div className="up-button-container">
              <div
                className="button menu-button"
                onClick={this.changeComponentToMenu}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/2099/2099153.svg"
                  alt="menu-button"
                ></img>
              </div>
            </div>
            <div className="center-button-container">
              <div className="button backward-button">
                <img
                  src="https://image.flaticon.com/icons/svg/56/56760.svg"
                  alt="backward-button"
                ></img>
              </div>
              <div
                className="button center-button"
                onClick={this.changeComponent}
              ></div>
              <div className="button forward-button">
                <img
                  src="https://image.flaticon.com/icons/svg/724/724927.svg"
                  alt="forward-button"
                ></img>
              </div>
            </div>
            <div className="down-button-container">
              <div className="button pause-play-button">
                <img
                  src="https://image.flaticon.com/icons/svg/64/64595.svg"
                  alt="pause-play-button"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    component: state.component,
  };
}

export default connect(mapStateToProps)(Buttons);
