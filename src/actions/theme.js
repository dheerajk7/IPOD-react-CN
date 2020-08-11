import CHANGE_THEME from './actionTypes';

//action creator for theme
export function changeTheme(theme) {
  return {
    type: CHANGE_THEME,
    theme,
  };
}
