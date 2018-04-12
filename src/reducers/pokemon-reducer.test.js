import pokemonReducer from './pokemon-reducer';
import action from '../actions';

describe('pokemonReducer', () => {

  it('should return default state', () => {
    expect(pokemonReducer(undefined, {})).toEqual([]);
  });

  it('should load pokemons', () => {
    expect(pokemonReducer(undefined, action.loadPokemons(pokemons))).toEqual(pokemons);
  });

});