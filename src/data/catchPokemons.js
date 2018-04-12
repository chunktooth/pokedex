export const catchPokemons = async () => {
  try {
    const response = await fetch('http://localhost:3001/pokemon');
    const pokemons = await response.json();
    console.log(pokemons);
    const sprites = await getSprites(pokemons);
    console.log(sprites);
    return pokemons;
  } catch (error) {
    throw error;
  }
}

const getSprites = async (pokemons) => {
  const sprites = pokemons.map(pokemon => {
    console.log(pokemon.sprites)
  });
  return sprites;
}