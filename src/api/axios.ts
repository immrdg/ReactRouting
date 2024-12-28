import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

type CustomAxiosDefaults = CreateAxiosDefaults

const customDefaults: CustomAxiosDefaults = {
  baseURL: 'https://api.example.com',
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
  timeout: 10000, // 10 seconds
};

const axiosInstance: AxiosInstance = axios.create(customDefaults);

export default axiosInstance;