import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing song image
import songImage from '../assets/images/she_move.jpg';
import '../assets/css/common.css';
import '../assets/css/playing.css';
class Playing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSongDuration: 0,
      songDurationInterval: '',
    };
  }

  // setting up the current time of the song
  // calling one function to set the interval of 1 second to updating the current song time of song in state
  componentDidMount() {
    const { song } = this.props;
    this.setState({ currentSongDuration: song.currentTime });
    this.songDurationInterval = setInterval(() => {
      this.setState({ currentTime: this.props.song.currentTime });
    }, 100);
  }

  // clearing the songDurationInterval which is managing currentSongTime
  componentWillUnmount() {
    clearInterval(this.songDurationInterval);
  }

  // according to status received from store as the status is changed by pause play button we are pausing and playing song
  componentDidUpdate() {
    const { playing } = this.props;
    if (playing) {
      this.playSong();
    } else {
      this.pauseSong();
    }
  }

  // function to dispatch a method to play song
  playSong = () => {
    const { song } = this.props;
    song.play();
  };

  // function to display message to pause song
  pauseSong = () => {
    const { song } = this.props;
    song.pause();
  };

  // function to render music component
  render() {
    // setting up current duration and total song duration to show on screen
    const { playing } = this.props;
    let totalSongDuration =
      Math.floor(this.props.song.duration / 60) +
      ':' +
      Math.floor(this.props.song.duration % 60);
    let currentSongDuration =
      Math.floor(this.state.currentTime / 60) +
      ':' +
      Math.floor(this.state.currentTime % 60);
    if (totalSongDuration === 'NaN:NaN') {
      totalSongDuration = '0:0';
    }
    return (
      <div className="playing-container screen-item-container">
        <div className="playing-heading">Music</div>
        <div className="playing-song-image">
          <img src={songImage} alt="song-album"></img>
        </div>
        <div className="song-name">She Move Like It</div>
        <div className="playing-button">
          {playing ? (
            <img
              src="https://image.flaticon.com/icons/svg/2611/2611514.svg"
              alt="pause-button"
            ></img>
          ) : (
            <img
              src="https://image.flaticon.com/icons/svg/2404/2404547.svg"
              alt="play-button"
            ></img>
          )}
        </div>
        <div className="playing-time">
          {currentSongDuration}/{totalSongDuration}
        </div>
      </div>
    );
  }
}

// sending song and playing status from store to props
function mapStateToProps(state) {
  return {
    playing: state.song.isSongPlaying,
    song: state.song.song,
  };
}

// connecting store props to playing component
export default connect(mapStateToProps)(Playing);
