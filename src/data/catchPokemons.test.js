import { catchPokemons } from './catchPokemons';
import { pokemons } from './mockData';

describe('catch pokemons', () => {

  it('should get all Pokemons', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        ok: true,
        json: () => Promise.resolve(pokemons) 
      });
    const received = await catchPokemons();
    expect(received).toEqual(pokemons);
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(catchPokemons()).rejects.toEqual(expected);
  });

});