import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/v1",
});

// todo : Router API 주소 설정 및 Interceptor 작성 //

// function : Axios 요청시 Interceptor //
axiosInstance.interceptors.request.use();

// function : Axios 응답시 Interceptor //
axiosInstance.interceptors.response.use();
export default axiosInstance;
