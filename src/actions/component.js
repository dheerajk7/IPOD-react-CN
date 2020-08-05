import { CHANGE_COMPONENT, CHANGE_ACTIVE_ITEM } from './actionTypes';

export function changeComponent(component) {
  return {
    type: CHANGE_COMPONENT,
    component,
  };
}

export function changeActiveItem(item) {
  return {
    type: CHANGE_ACTIVE_ITEM,
    item,
  };
}
