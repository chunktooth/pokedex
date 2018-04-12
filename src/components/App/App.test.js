import React from 'react';
import { App, 
  mapStateToProps, 
  mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const mockTypes = { types: {'name': 'pikachu'}};
    const mockPokemons = { pokemons: {'name': 'gengar'}};

    const mappedTypes = mapStateToProps(mockTypes);
    expect(mappedTypes.types).toEqual(mockTypes.types);

    const mappedPokemons = mapStateToProps(mockPokemons);
    expect(mappedPokemons.pokemons).toEqual(mockPokemons);
  });

  it('should mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    mapped.loadTypes();
    mapped.loadPokemons();
    expect(mockDispatch).toHaveBeenCalled();
  });

});

