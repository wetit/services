import axios from "axios";

const axiosApiInstance = axios.create();
const token = `..........PASTE TOKEN HERE...................`

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    if (token) {
      config.headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return config;
    } else {
      window.location.href('/login')
    }
  },
  error => {
    Promise.reject(error)
  });


export { axiosApiInstance }