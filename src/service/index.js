import Axios from 'axios';

export const api = Axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});