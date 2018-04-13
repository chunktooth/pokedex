export const catchPokemons = async () => {
  try {
    const response = await fetch('http://localhost:3001/pokemon');
    const pokemons = await response.json();
    console.log(pokemons);

    return pokemons;
  } catch (error) {
    throw error;
  }
}