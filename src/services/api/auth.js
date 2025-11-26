import axiosClient from '../axiosClient';

export const login = (data) => axiosClient.post('/login', data);
export const signup = (data) => axiosClient.post('/register', data);
export const logout = () => axiosClient.post('/logout');
export const getUser = () => axiosClient.get('/user');
