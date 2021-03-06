import { PLAY_SONG, PAUSE_SONG, CHANGE_SONG } from '../actions/actionTypes';
import { song } from '../data/song';

// song reducer intial state to maintain song status
const initialState = {
  isSongPlaying: false,
  activeSong: song.she_move,
};

// changing store on the basis of different actions
export default function pausePlaySong(state = initialState, action) {
  switch (action.type) {
    // case to change song playing status to play
    case PLAY_SONG: {
      return {
        ...state,
        isSongPlaying: true,
      };
    }
    // case to change song playing status to pause
    case PAUSE_SONG: {
      return {
        ...state,
        isSongPlaying: false,
      };
    }
    // changing song on the basis of the song name we received in action
    case CHANGE_SONG: {
      let currentSong = '';
      if (action.song === 'She Move') {
        currentSong = song.she_move;
      } else if (action.song === 'Qaafirana') {
        currentSong = song.qaafirana;
      } else if (action.song === 'Nikle Current') {
        currentSong = song.nikle_currant;
      } else {
        currentSong = song.she_move;
      }
      return {
        ...state,
        isSongPlaying: true,
        activeSong: currentSong,
      };
    }
    // returning default pause status of song
    default: {
      return state;
    }
  }
}
