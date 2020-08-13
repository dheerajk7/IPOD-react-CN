import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import '../assets/css/buttons.css';
import { connect } from 'react-redux';

// importing action creators to perform different actions
import { changeComponent } from '../actions/component';
import { changeActiveItem } from '../actions/component';
import { playSong, pauseSong, changeSong } from '../actions/song';

// importing action creator to change theme
import { changeTheme } from '../actions/theme';

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
    if (activeComponent !== 'Now Playing') {
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
    if (activeComponent === 'Now Playing') {
      if (playing === true) {
        dispatch(pauseSong());
      } else {
        dispatch(playSong());
      }
      return;
    } else if (
      activeComponent === 'Menu' ||
      activeComponent === 'Music' ||
      activeComponent === 'Setting'
    ) {
      dispatch(changeComponent(activeItem));
    } else if (activeComponent === 'Themes') {
      dispatch(changeTheme(activeItem));
    } else if (activeComponent === 'All Music') {
      dispatch(changeSong(activeItem));
      const { song } = this.props.song;
      song.load();
      dispatch(changeComponent('Now Playing'));
    }
  };

  // change song in forward direction when playing component is active
  handleBackwardButton = () => {
    const { dispatch } = this.props;
    const { activeComponent } = this.props.component;
    const { song } = this.props.song;
    if (activeComponent === 'Now Playing') {
      song.load();
      const { name } = this.props.song;
      if (name === 'She Move') {
        dispatch(changeSong('Nikle Current'));
      } else if (name === 'Qaafirana') {
        dispatch(changeSong('She Move'));
      } else if (name === 'Nikle Current') {
        dispatch(changeSong('Qaafirana'));
      }
    }
  };

  // change song in backward direction when playing component is active
  handleForwardButton = () => {
    const { dispatch } = this.props;
    const { activeComponent } = this.props.component;
    const { song } = this.props.song;
    if (activeComponent === 'Now Playing') {
      song.load();
      const { name } = this.props.song;
      if (name === 'She Move') {
        dispatch(changeSong('Qaafirana'));
      } else if (name === 'Qaafirana') {
        dispatch(changeSong('Nikle Current'));
      } else if (name === 'Nikle Current') {
        dispatch(changeSong('She Move'));
      }
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
    if (activeItem === 'Now Playing') {
      dispatch(changeActiveItem('All Music'));
    } else if (activeItem === 'All Music') {
      dispatch(changeActiveItem('Artist'));
    } else if (activeItem === 'Artist') {
      dispatch(changeActiveItem('Album'));
    } else if (activeItem === 'Album') {
      dispatch(changeActiveItem('Now Playing'));
    }
  };

  // changing active item of music component in backward direction
  backwardMoveMusicComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Now Playing') {
      dispatch(changeActiveItem('Album'));
    } else if (activeItem === 'All Music') {
      dispatch(changeActiveItem('Now Playing'));
    } else if (activeItem === 'Artist') {
      dispatch(changeActiveItem('All Music'));
    } else if (activeItem === 'Album') {
      dispatch(changeActiveItem('Artist'));
    }
  };

  // changing active item of setting component in forward direction
  forwardMoveSettingComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Themes') {
      dispatch(changeActiveItem('More Settings'));
    } else if (activeItem === 'More Settings') {
      dispatch(changeActiveItem('Themes'));
    }
  };

  // changing active item of setting component in backward direction
  backwardMoveSettingComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Themes') {
      dispatch(changeActiveItem('More Settings'));
    } else if (activeItem === 'More Settings') {
      dispatch(changeActiveItem('Themes'));
    }
  };

  //changing active item of themes component in forward direction
  forwardMoveThemesComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Marshmello') {
      dispatch(changeActiveItem('Striker'));
    } else if (activeItem === 'Striker') {
      dispatch(changeActiveItem('Virtue'));
    } else if (activeItem === 'Virtue') {
      dispatch(changeActiveItem('Marshmello'));
    }
  };

  // changing activce item of themes component in backward direction
  backwardMoveThemesComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'Marshmello') {
      dispatch(changeActiveItem('Virtue'));
    } else if (activeItem === 'Striker') {
      dispatch(changeActiveItem('Marshmello'));
    } else if (activeItem === 'Virtue') {
      dispatch(changeActiveItem('Striker'));
    }
  };

  //changing active item of all music component in forward direction
  forwardMoveAllMusicComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'She Move') {
      dispatch(changeActiveItem('Qaafirana'));
    } else if (activeItem === 'Qaafirana') {
      dispatch(changeActiveItem('Nikle Current'));
    } else if (activeItem === 'Nikle Current') {
      dispatch(changeActiveItem('She Move'));
    }
  };

  //changing active item of all music component in forward direction
  backwardMoveAllMusicComponent = () => {
    const { dispatch } = this.props;
    const { activeItem } = this.props.component;
    if (activeItem === 'She Move') {
      dispatch(changeActiveItem('Nikle Current'));
    } else if (activeItem === 'Qaafirana') {
      dispatch(changeActiveItem('She Move'));
    } else if (activeItem === 'Nikle Current') {
      dispatch(changeActiveItem('Qaafirana'));
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
        const { activeComponent } = oldThis.props.component;
        if (distance < 0) {
          // calling movement fuction of active item with old this on the basis of current component to move selected active item
          //changing active item item according to active Component
          if (activeComponent === 'Menu') {
            oldThis.backwardMoveMenuComponent();
          } else if (activeComponent === 'Music') {
            oldThis.backwardMoveMusicComponent();
          } else if (activeComponent === 'Setting') {
            oldThis.backwardMoveSettingComponent();
          } else if (activeComponent === 'Themes') {
            oldThis.backwardMoveThemesComponent();
          } else if (activeComponent === 'All Music') {
            oldThis.backwardMoveAllMusicComponent();
          }
        } else {
          if (activeComponent === 'Menu') {
            oldThis.forwardMoveMenuComponent();
          } else if (activeComponent === 'Music') {
            oldThis.forwardMoveMusicComponent();
          } else if (activeComponent === 'Setting') {
            oldThis.forwardMoveSettingComponent();
          } else if (activeComponent === 'Themes') {
            oldThis.forwardMoveThemesComponent();
          } else if (activeComponent === 'All Music') {
            oldThis.forwardMoveAllMusicComponent();
          }
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
    const { styles } = this.props;
    return (
      <div className="button-container">
        <div className="button-region-container" ref={this.zingRegion}>
          <div
            className="inner-button-container"
            onMouseOver={this.rotateUsingZing}
            ref={this.inner}
            style={styles}
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
              <div
                className="button backward-button"
                onClick={this.handleBackwardButton}
              >
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
              <div
                className="button forward-button"
                onClick={this.handleForwardButton}
              >
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
    styles: state.theme.circle_background,
    song: state.song.activeSong,
  };
}

// connecting required props using connect to buttons
export default connect(mapStateToProps)(Buttons);
