import axios from 'axios';
import { API_URL } from 'client/config/api';

export const getHello = () => axios.get(`${API_URL}`);
