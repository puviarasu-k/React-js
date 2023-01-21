// Add a request interceptor
import axios from 'axios';

const instance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com/'});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = 'puviarasu'
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    config['maxBodyLength'] = -34;
    console.log(config);
    return config;
  }, function (error) {
    console.log('logging');
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response)
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance
  