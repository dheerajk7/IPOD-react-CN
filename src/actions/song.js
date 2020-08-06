import { PLAY_SONG, PAUSE_SONG } from './actionTypes';

//action creator for playing song
export function playSong() {
  return {
    type: PLAY_SONG,
  };
}

// action creator for pausing song
export function pauseSong() {
  return {
    type: PAUSE_SONG,
  };
}
