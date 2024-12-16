import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from '../config/constants';

function useBooks(endpoint = '') {
  return useQuery(['books', endpoint], async () => {
    const { data } = await axios.get(`${API_URL}/books${endpoint}`);
    return data;
  });
}

export default useBooks;