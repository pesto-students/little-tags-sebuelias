import axios from 'axios';
import {API_ENDPOINT, GET_DATA_API_ENDPOINT } from '../constant'


// configuring axios
const api = axios.create({
  baseURL: API_ENDPOINT,
});

const apparrelData = axios.create({
  baseURL: GET_DATA_API_ENDPOINT,
});

export { api, apparrelData }