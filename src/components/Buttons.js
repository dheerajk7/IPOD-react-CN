import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import '../assets/css/buttons.css';
import { connect } from 'react-redux';
import { changeComponent } from '../actions/component';
import { changeActiveItem } from '../actions/component';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.defined = false;
    this.zingRegion = React.createRef();
    this.region = null;
    this.inner = React.createRef();
  }

  componentDidMount() {
    this.region = new ZingTouch.Region(this.zingRegion.current);
  }

  componentWillUnmount() {
    this.defined = false;
  }

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

  forwardMoveMusicComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'All Music') {
      dispatch(changeActiveItem('Artist'));
    } else if (activeItem === 'Artist') {
      dispatch(changeActiveItem('Album'));
    } else if (activeItem === 'Album') {
      dispatch(changeActiveItem('All Music'));
    }
  };

  backwardMoveMusicComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'All Music') {
      dispatch(changeActiveItem('Album'));
    } else if (activeItem === 'Artist') {
      dispatch(changeActiveItem('All Music'));
    } else if (activeItem === 'Album') {
      dispatch(changeActiveItem('Artist'));
    }
  };

  changingActiveItemForward = () => {
    const { activeComponent } = this.props.component;
    if (activeComponent === 'Menu') {
      this.forwardMoveMenuComponent();
    } else if (activeComponent === 'Music') {
      this.forwardMoveMusicComponent();
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

  rotate = (target) => {
    let angleChange = 0;
    let distance = 0;
    let oldThis = this;
    this.region.bind(target, 'rotate', function (event) {
      let currentDistance = event.detail.distanceFromLast;
      if (distance === 0) {
        distance = currentDistance;
      } else {
        if (currentDistance > 0 && distance < 0) {
          angleChange = 0;
          distance = 0;
        } else if (currentDistance < 0 && distance > 0) {
          angleChange = 0;
          distance = 0;
        }
      }
      angleChange++;
      if (angleChange === 15) {
        angleChange = 0;
        if (distance < 0) {
          oldThis.backwardMoveMenuComponent();
          oldThis.backwardMoveMusicComponent();
        } else {
          oldThis.forwardMoveMenuComponent();
          oldThis.forwardMoveMusicComponent();
        }
      }
    });
  };

  rotateUsingZing = () => {
    if (this.defined === false) {
      this.defined = true;
      this.rotate(this.inner.current);
    }
  };

  render() {
    return (
      <div className="button-container">
        <div className="button-region-container" ref={this.zingRegion}>
          <div
            className="inner-button-container"
            onMouseOver={this.rotateUsingZing}
            ref={this.inner}
          >
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
                onClick={this.changingActiveComponent}
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
