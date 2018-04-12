export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_POKEMONS':
    return [...action.pokemons];
  default:
    return state;
  }
};
