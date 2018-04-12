export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
      return [...action.types];
  default:
    return state;
  }
};


// case 'LOAD_POKEMONS':
//       return [...action.pokemons];