import axios from 'axios';

export const setToken = (token = null) => {
  if (token) {
    axios.defaults.headers['Content-type'] = 'application/json';
    axios.defaults.headers['x-auth-token'] = token;
  } else delete axios.defaults.headers['x-auth-token'];
};
