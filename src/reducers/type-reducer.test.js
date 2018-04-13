import typeReducer from './type-reducer';
import action from '../actions';

describe('typeReducer', () => {

  it('should return default state', () => {
    expect(typeReducer(undefined, {})).toEqual([]);
  });

  it('should load types', () => {
    const types = [
      { 
        "id":"1",
        "name":"normal",
        "pokemon":["16","17","18","19","20"]
      },
      { 
        "id":"2",
        "name":"fighting",
        "pokemon":["56","57","66","67","68"]
      }
    ];
    expect(typeReducer(undefined, action.loadMovies(types))).toEqual(types);
  });

});