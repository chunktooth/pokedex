export const getTypes = async () => {
  try {
    const response = await fetch('http://localhost:3001/types');
    const pokeTypes = await response.json();
    console.log(pokeTypes);

    return pokeTypes;
  } catch (error) {
    throw error;
  }
}