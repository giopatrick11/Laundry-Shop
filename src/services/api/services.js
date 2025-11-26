import axiosClient from '../axiosClient';

export const getServices = () => axiosClient.get('/services');
