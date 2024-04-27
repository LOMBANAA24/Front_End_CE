import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Cambia esto por la URL de tu API

const api = axios.create({
  baseURL: API_URL,
});

export default api;
