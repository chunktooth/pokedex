export const typeReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TYPES':
    return [...action.movies];
  default:
    return state;
  }
};
