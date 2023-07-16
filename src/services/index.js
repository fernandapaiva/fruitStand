import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://192.168.0.165:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});