import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

// function : Axios 요청시 Interceptor //
axiosInstance.interceptors.request.use(
  config => {
    // const { accessToken } = useAuthStore.getState();
    // if (accessToken) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
//
// // function : Axios 응답시 Interceptor //
// axiosInstance.interceptors.response.use();
// export default axiosInstance;

export default axiosInstance;
