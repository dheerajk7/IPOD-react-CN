import { PLAY_SONG, PAUSE_SONG } from '../actions/actionTypes';
import song from '../assets/songs/she_move.mp3';

// song reducer intial state to maintain song status
const initialState = {
  isSongPlaying: false,
  song: new Audio(song),
};

// changing store on the basis of different actions
export default function changingComponent(state = initialState, action) {
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
    // returning default pause status of song
    default: {
      return state;
    }
  }
}
