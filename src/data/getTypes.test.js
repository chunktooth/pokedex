import { getTypes } from './fetchData.js'

describe('get types', () => {

  it.only('should get all Pokemon types', () => {

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        json: () => Promise.resolve({ types }) 
      });
    ));

    const expected =[{
      method: 'GET',
      body: JSON.stringify({ types }),
      headers: {
        'Content-Type': 'application/json',
      }
    }];
    expect(window.fetch).toEqual(...expected);

  });

}