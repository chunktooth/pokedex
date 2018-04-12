import { catchPokemons } from './catchPokemons';

describe('catch pokemons', () => {

  it('should get pokemon datas', () => {
    window.fetch = jest.fn().mockImplementation(() =>Promise.resolve({
        json: () => Promise.resolve({ pokemons })
      })
    )

    const expected = [{
      method: 'GET',
      body: JSON.stringify({ pokemons }),
      headers: {
        'Content-Type': 'application/json'
      }
    }];

    expect(window.fetch).toEqual(...expected);
  });

});