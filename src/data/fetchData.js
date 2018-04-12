export const getTypes = async (types) => {
  try {
    const response = await fetch('localhost:3001/types', {
      method: 'GET',
      body: JSON.stringify(types),
      headers: {
        'content-type': 'application/json',
      }
    });
    console.log(response);

    return response;
  } catch (error) {
    throw error;
  }
}