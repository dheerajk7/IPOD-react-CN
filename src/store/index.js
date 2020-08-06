import { createStore } from 'redux';
import reducer from '../reducers';

let store;

// creating store to maintain status using combine reducer
export function configureStore() {
  store = createStore(reducer);
  return store;
}
