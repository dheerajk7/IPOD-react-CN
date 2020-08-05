import { CHANGE_COMPONENT, CHANGE_ACTIVE_ITEM } from '../actions/actionTypes';

const initialState = {
  activeComponent: 'Menu',
  activeItem: 'Coverflow',
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COMPONENT: {
      if (action.component === 'Menu') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Coverflow',
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
    case CHANGE_ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.item,
      };
    }
    default: {
      return state;
    }
  }
}
