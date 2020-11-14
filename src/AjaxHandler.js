import axios from 'axios'

// here, you can define global ajax settings
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/',
  method: 'get',
  timeout: 1000,
});

export default instance;