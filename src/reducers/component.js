import { CHANGE_COMPONENT, CHANGE_ACTIVE_ITEM } from '../actions/actionTypes';

// component reducer initial state to render menu component on loading IPOD
const initialState = {
  activeComponent: 'Themes',
  activeItem: 'Marshmello',
};

export default function changingComponent(state = initialState, action) {
  switch (action.type) {
    // case to change the component on the basis of component received in props
    case CHANGE_COMPONENT: {
      // if we are changing active component to menu then we need to change active item to coverflow
      if (action.component === 'Menu') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Coverflow',
        };
      } // if we are changing active component to music then we need to change active item to All Music
      else if (action.component === 'Music') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'All Music',
        };
        // if we are changing active component to setting then we need to change active item to themes
      } else if (action.component === 'Setting') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Themes',
        };
      }
      //if we are changing active component to setting then we need to change active item to marshmello
      else if (action.component === 'Themes') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'Marshmello',
        };
      }
      //if we are changing active component to all music then we need to set active item to She Move
      else if (action.component === 'All Music') {
        return {
          ...state,
          activeComponent: action.component,
          activeItem: 'She Move',
        };
      }
      // changing to other component
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
