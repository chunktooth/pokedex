import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { 
      disableLifeCycleMethods: true });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getTypes and return pokeTypes', () => {
    const mockTypes = { types: 
      {'id': '1', 'name': 'pikachu'}
  };
    const mappedTypes = mapStateToProps(mockTypes);
    expect(mappedTypes.types).toEqual(mockTypes.types);
  });

});