export const getTypes = async (types) => {
  try {
    const response = await fetch('localhost:3001/types', {
      method: 'GET',
      body: JSON.stringify({ types }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const pokeTypes = await response.json();
    console.log(pokeTypes);

    return pokeTypes;
  } catch (error) {
    throw error;
  }
}