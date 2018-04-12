import { getTypes } from './getTypes';
import { mockTypes } from './mockData';

describe('get types', () => {

  it('should get all Pokemon types', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ 
        ok: true,
        json: () => Promise.resolve(mockTypes) 
      });
    const received = await getTypes();
    expect(received).toEqual(mockTypes);
  });

  it('should throw an error in case of bad response', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 500
    }));

    const expected = { "status": 500 };
    expect(getTypes()).rejects.toEqual(expected);
  });

});