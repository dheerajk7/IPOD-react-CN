import { combineReducers } from 'redux';
import component from './component';
import song from './song';
import theme from './theme';

// setting both the reducer in as single reducer in store
export default combineReducers({
  component,
  song,
  theme,
});
