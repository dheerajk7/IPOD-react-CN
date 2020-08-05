import { CHANGE_COMPONENT } from '../actions/actionTypes';

const initialState = {
  activeComponent: 'Games',
  activeItem: 'Music',
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COMPONENT: {
      if (action.component === 'Menu') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Music',
        };
      } else if (action.component === 'Music') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'All Music',
        };
      } else {
        return {
          state,
          activeComponent: action.component,
        };
      }
    }
    default: {
      return state;
    }
  }
}
