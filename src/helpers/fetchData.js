import axios from 'axios';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;


