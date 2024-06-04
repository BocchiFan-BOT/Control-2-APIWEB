import axios from 'axios';

const searchFacts = async (query) => {
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
    return response.data.result;
  } catch (error) {
    throw new Error('Error al obtener los datos');
  }
};

export { searchFacts };