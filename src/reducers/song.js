import {
  PLAY_SONG,
  PAUSE_SONG,
  CHANGE_SONG,
  RELOAD,
} from '../actions/actionTypes';
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

    case CHANGE_SONG: {
      let currentSong = '';
      if (action.song === 'She Move') {
        currentSong = song.she_move;
      } else if (action.song === 'Qaafirana') {
        currentSong = song.qaafirana;
      } else if (action.song === 'Nikle Current') {
        currentSong = song.nikle_current;
      } else {
        currentSong = song.she_move;
      }
      return {
        ...state,
        isSongPlaying: true,
        activeSong: currentSong,
      };
    }
    case RELOAD: {
      let currentSong = '';
      if (action.song === 'She Move') {
        currentSong = song.she_move;
      } else if (action.song === 'Qaafirana') {
        currentSong = song.qaafirana;
      } else if (action.song === 'Nikle Current') {
        currentSong = song.nikle_current;
      } else {
        currentSong = song.she_move;
      }
      currentSong.song.load();
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
