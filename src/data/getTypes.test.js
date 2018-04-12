import { getTypes } from './getTypes';

describe('get types', () => {

  it('should get all Pokemon types', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        json: () => Promise.resolve({ type }) 
      });
    ));

    const expected = [{
      method: 'GET',
      body: JSON.stringify({ type }),
      headers: {
        'Content-Type': 'application/json'
      }
    }];
    
    expect(window.fetch).toEqual(...expected);
  });

};