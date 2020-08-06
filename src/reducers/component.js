import { CHANGE_COMPONENT, CHANGE_ACTIVE_ITEM } from '../actions/actionTypes';

// component reducer initial state to render menu component on loading IPOD
const initialState = {
  activeComponent: 'Menu',
  activeItem: 'Coverflow',
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    // case to change the component on the basis of component received in props
    case CHANGE_COMPONENT: {
      // if we are changing active component to menu then we need to change active component to coverflow
      if (action.component === 'Menu') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Coverflow',
        };
      } // if we are changing active component to music then we need to change active component to All Music
      else if (action.component === 'Music') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'All Music',
        };
      } // changing to other component
      else {
        return {
          state,
          activeComponent: action.component,
        };
      }
    }
    // case to change active item of menu or music component
    case CHANGE_ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.item,
      };
    }
    // default case to render menu component when IPOD is loaded initially
    default: {
      return state;
    }
  }
}
