import React, { Component } from 'react';
import '../assets/css/buttons.css';
import { connect } from 'react-redux';
import { changeComponent } from '../actions/component';
import { changeActiveItem } from '../actions/component';

class Buttons extends Component {
  changeComponentToMenu = () => {
    this.props.dispatch(changeComponent('Menu'));
  };

  changingActiveComponent = () => {
    const { dispatch } = this.props;
    const { activeComponent, activeItem } = this.props.component;
    if (activeComponent === 'Menu' || activeComponent === 'Music') {
      dispatch(changeComponent(activeItem));
    }
  };

  forwardMoveMenuComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Coverflow') {
      dispatch(changeActiveItem('Music'));
    } else if (activeItem === 'Music') {
      dispatch(changeActiveItem('Games'));
    } else if (activeItem === 'Games') {
      dispatch(changeActiveItem('Setting'));
    } else if (activeItem === 'Setting') {
      dispatch(changeActiveItem('Coverflow'));
    }
  };

  backwardMoveMenuComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Coverflow') {
      dispatch(changeActiveItem('Setting'));
    } else if (activeItem === 'Music') {
      dispatch(changeActiveItem('Coverflow'));
    } else if (activeItem === 'Games') {
      dispatch(changeActiveItem('Music'));
    } else if (activeItem === 'Setting') {
      dispatch(changeActiveItem('Games'));
    }
  };

  forwardMoveMusicComponent = () => {};

  backwardMoveMusicComponent = () => {};

  changingActiveItemForward = () => {
    const { activeComponent } = this.props.component;
    if (activeComponent === 'Menu') {
      this.forwardMoveMenuComponent();
    } else if (activeComponent === 'Music') {
      console.log('Music');
    }
  };

  changingActiveItemBackward = () => {
    const { activeComponent } = this.props.component;
    if (activeComponent === 'Menu') {
      this.backwardMoveMenuComponent();
    } else if (activeComponent === 'Music') {
      this.backwardMoveMusicComponent();
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
              <div
                className="button backward-button"
                onClick={this.changingActiveItemBackward}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/56/56760.svg"
                  alt="backward-button"
                ></img>
              </div>
              <div
                className="button center-button"
                onClick={this.changingActiveComponent}
              ></div>
              <div
                className="button forward-button"
                onClick={this.changingActiveItemForward}
              >
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
