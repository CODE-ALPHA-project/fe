import axiosInstance from '@/apis/axiosInterceptor';

export const getRequest = async () => {
  const response = await axiosInstance.get('/test/');
  return response.data;
};
