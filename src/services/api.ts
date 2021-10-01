import axios from 'axios';
import { oauth } from './OAuth';

const api = axios.create({
  baseURL: 'http://hashiratech.com.br/wp-json/wc/v3',
  params: {
    consumer_key: oauth.consumer.key,
    consumer_secret: oauth.consumer.secret
  }
});

let sourceRequest = {};

api.interceptors.request.use(
  request => {

    const parameters = oauth.authorize({
      url: request.baseURL + request.url,
      method: request.method
    }, oauth.consumer);

    const paramString = `?oauth_consumer_key=${parameters.oauth_consumer_key}&oauth_signature_method=${parameters.oauth_signature_method}&oauth_timestamp=${parameters.oauth_timestamp}&oauth_nonce=${parameters.oauth_nonce}&oauth_version=${parameters.oauth_version}&oauth_signature=${parameters.oauth_signature}`;
    const teste2 = `?consumer_key=${oauth.consumer.key}&consumer_secret=${oauth.consumer.secret}`

    request.headers['Content-Type'] = 'application/json';

    //console.log('To no interceptor ' + JSON.stringify(request));
    return request;
  }
);

api.interceptors.response.use(
  response => {
    console.log(JSON.stringify(response));
  }
)

export default api;