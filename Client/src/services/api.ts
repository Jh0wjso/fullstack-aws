import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});

export const createSession = (sessionData: {
  hostname: string;
  players: number;
  map: string;
  mode: string;
}) => {
  return api.post('/sessions', sessionData);
};

export const getSessions = () => {
  return api.get('/sessions');
};
