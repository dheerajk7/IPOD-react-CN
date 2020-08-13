import { PLAY_SONG, PAUSE_SONG, CHANGE_SONG, RELOAD } from './actionTypes';

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

//to change the active song
export function changeSong(song) {
  return {
    type: CHANGE_SONG,
    song,
  };
}

// to reload song from starting
export function reload(song) {
  return {
    type: RELOAD,
    song: song,
  };
}
