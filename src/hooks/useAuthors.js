import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../config/constants';

function useAuthors() {
  return useQuery('authors', async () => {
    const { data } = await axios.get(`${API_URL}/authors`);
    return data;
  });
}

export default useAuthors;