import axios from 'axios';
import { oauth } from './OAuth';

const api = axios.create({
  baseURL: 'https://hashiratech.com.br/wp-json/wc/v3'
});

api.interceptors.request.use(
  request => {
  
    request.url = request.url + `?consumer_key=${oauth.consumer.key}&consumer_secret=${oauth.consumer.secret}`

    //console.log('To no interceptor ' + JSON.stringify(request.url));
    return request;
  }
);

api.interceptors.response.use(
  response => {
    console.log(JSON.stringify(response.data.id));
  }
)

export default api;