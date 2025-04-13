import { getUserIdFromLocalStorage, showError } from './utils';
import axios from 'axios';

export let API = axios.create({
  baseURL: "https://120.24.177.114",
  headers: {
    'New-API-User': getUserIdFromLocalStorage(),
    'Cache-Control': 'no-store'
  }
});

export function updateAPI() {
  API = axios.create({
    baseURL: "https://120.24.177.114",
    headers: {
      'New-API-User': getUserIdFromLocalStorage(),
      'Cache-Control': 'no-store'
    }
  });
}

API.interceptors.response.use(
  (response) => response,
  (error) => {
    showError(error);
  },
);
