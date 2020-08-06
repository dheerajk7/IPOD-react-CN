import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import '../assets/css/buttons.css';
import { connect } from 'react-redux';

// importing action creators to perform different actions
import { changeComponent } from '../actions/component';
import { changeActiveItem } from '../actions/component';
import { playSong, pauseSong } from '../actions/song';

// renders button component to show all buttons
class Buttons extends Component {
  constructor(props) {
    super(props);
    // defined is used to maintain that region is already defined once and will not be defined again
    this.defined = false;
    // reference to the container of jsx from where to create region for gesture
    this.zingRegion = React.createRef();
    this.region = null;
    // reference to inner container that wil be binded to gesture region
    this.inner = React.createRef();
  }

  //creating region to work gesture in that region on component mounting
  componentDidMount() {
    this.region = new ZingTouch.Region(this.zingRegion.current);
  }

  // channing defined to false when component is unmounted
  componentWillUnmount() {
    this.defined = false;
  }

  // on clicking menu button changing active component on screen to menu
  handleMenuButton = () => {
    this.props.dispatch(changeComponent('Menu'));
  };

  // if active component is music then pausing and playing song on clicking pause play button
  handlePausePlayButton = () => {
    const { playing, dispatch } = this.props;
    const { activeComponent } = this.props.component;
    if (activeComponent !== 'All Music') {
      return;
    }
    if (playing === true) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong());
    }
  };

  handleCenterButton = () => {
    const { dispatch, playing } = this.props;
    const { activeComponent, activeItem } = this.props.component;
    // if active component is playing then center button will also pause and play song like pause play button
    if (activeComponent === 'All Music') {
      if (playing === true) {
        dispatch(pauseSong());
      } else {
        dispatch(playSong());
      }
      return;
    }
    if (activeComponent === 'Menu' || activeComponent === 'Music') {
      dispatch(changeComponent(activeItem));
    }
  };

  //changing active item of menu component in forward direction
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

  //changing active item of menu component in backward direction
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

  //changing active item of music component in forward direction
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

  // changing active item of music component in backward direction
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

  // rotating item on the basis of angle travelled
  // function to rotate item
  rotate = (target) => {
    let angleChange = 0;
    let distance = 0;
    // keeping old this so that we can call backward and forward move function of class
    let oldThis = this;
    // binding rotatable region to rotate of zingtouch library
    // this value changes inside region.bind as it a callback
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
      // if anglechange is 15 then rotate the item towards forward if angle is greater then zero
      // if anglechange is 15 then rotate the item towards backward if angle is less then zero
      if (angleChange === 15) {
        angleChange = 0;
        if (distance < 0) {
          // calling movement fuction of active item with old this
          oldThis.backwardMoveMenuComponent();
          oldThis.backwardMoveMusicComponent();
        } else {
          oldThis.forwardMoveMenuComponent();
          oldThis.forwardMoveMusicComponent();
        }
      }
    });
  };

  // using these function to create zing region on mouse over once if not created and if created then it will not be called
  rotateUsingZing = () => {
    if (this.defined === false) {
      this.defined = true;
      this.rotate(this.inner.current);
    }
  };

  // rendering button component
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
                onClick={this.handleMenuButton}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/833/833473.svg"
                  alt="menu-button"
                ></img>
              </div>
            </div>
            <div className="center-button-container">
              <div className="button backward-button">
                <img
                  src="https://image.flaticon.com/icons/svg/915/915516.svg"
                  alt="backward-button"
                ></img>
              </div>
              <div
                className="button center-button"
                onClick={this.handleCenterButton}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/323/323308.svg"
                  alt="center-button"
                ></img>
              </div>
              <div className="button forward-button">
                <img
                  src="https://image.flaticon.com/icons/svg/915/915517.svg"
                  alt="forward-button"
                ></img>
              </div>
            </div>
            <div className="down-button-container">
              <div
                className="button pause-play-button"
                onClick={this.handlePausePlayButton}
              >
                <img
                  src="https://image.flaticon.com/icons/svg/1792/1792886.svg"
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

// using store to map required props to above component
function mapStateToProps(state) {
  return {
    component: state.component,
    playing: state.song.isSongPlaying,
  };
}

// connecting required props using connect to buttons
export default connect(mapStateToProps)(Buttons);
