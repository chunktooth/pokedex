export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
      return [...action.types];
    case 'LOAD_POKEMONS':
      return [...action.pokemons];
  default:
    return state;
  }
};
