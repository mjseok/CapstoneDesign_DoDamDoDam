import axios from 'axios';

const Axios = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3001'
      : 'http://115.85.181.160:3001',
  withCredentials: true,
});

export default Axios;
