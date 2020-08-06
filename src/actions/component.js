import { CHANGE_COMPONENT, CHANGE_ACTIVE_ITEM } from './actionTypes';

//action creator for changing component to the current component passed
export function changeComponent(component) {
  return {
    type: CHANGE_COMPONENT,
    component,
  };
}

//action creator for changing active item to the current item passed
export function changeActiveItem(item) {
  return {
    type: CHANGE_ACTIVE_ITEM,
    item,
  };
}
