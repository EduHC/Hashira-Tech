import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hashiratech.com.br/wp-json/wc/v3' 
});

export default api;