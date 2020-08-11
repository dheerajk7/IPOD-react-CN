import { CHANGE_THEME } from '../actions/actionTypes';
import { marshmello, virtue, striker } from '../data/themes';

// component reducer initial state to render menu component on loading IPOD
const initialState = {
  background: { backgroundColor: '#f5c8cf' },
  ipod_background: {
    backgroundImage: 'linear-gradient(to right, #396570, #1c7187, #184b58)',
  },
  circle_background: {
    backgroundImage: 'linear-gradient(to right, #e5b17a, #c66d18, #f3be8c)',
  },
  menu: {
    menu: {
      backgroundColor: '#fcffe3a1',
    },
    active: {
      backgroundImage: 'linear-gradient(to right, #cd2f0b, #b22100, #992409)',
      color: 'white',
    },
  },
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    // case to change the theme on the basis of theme received in action
    case CHANGE_THEME: {
      if (action.theme === 'Striker') {
        return striker;
      } else if (action.theme === 'Virtue') {
        return virtue;
      } else {
        return marshmello;
      }
    }
    // default case to render marshmello theme when IPOD is loaded initially
    default: {
      return state;
    }
  }
}
