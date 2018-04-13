import { combineReducers } from 'redux';
import { typeReducer } from './type-reducer';
import { pokemonReducer } from './pokemon-reducer';

const rootReducer = combineReducers({
  types: typeReducer,
  pokemons: pokemonReducer
});

export default rootReducer;
