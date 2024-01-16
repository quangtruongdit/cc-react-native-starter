import axios from 'axios';

export const apiService = {
    fetchData: () => axios.get('https://jsonplaceholder.typicode.com/photos'),
};