import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemon-reducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer
});

export default rootReducer;
