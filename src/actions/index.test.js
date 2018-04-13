import * as actions from './index';
import { pokemons } from '../data/mockData';

describe('actions', () => {

  describe('load types', () => {
    it('should return a type of LOAD_TYPES and payload', () => {
     const types = [
        { "id":"1",
        "name":"normal",
        "pokemon":["16","17","18","19","20"]
        },
        { "id":"2",
          "name":"fighting",
          "pokemon":["56","57","66","67","68"]
        }
      ]; 
      const expected = {
        type: 'LOAD_TYPES',
        types
      };
      expect(actions.loadTypes(types)).toEqual(expected);
    });
  });

  describe('load pokemons', () => {
    it('should return a type of LOAD_POKEMONS and payload', () => {
      const expected = {
        type: 'LOAD_POKEMONS',
        pokemons
      };
      expect(actions.loadPokemons(pokemons)).toEqual(expected);
    });
  });

});
