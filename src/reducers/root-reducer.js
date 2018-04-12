import { combineReducers } from 'redux';
import { typeReducer } from './type-reducer';

const rootReducer = combineReducers({
  types: typeReducer
});

export default rootReducer;
