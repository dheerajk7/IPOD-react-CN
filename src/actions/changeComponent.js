import { CHANGE_COMPONENT } from './actionTypes';

export function changeComponent(component) {
  return {
    type: CHANGE_COMPONENT,
    component,
  };
}
