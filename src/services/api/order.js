import axiosClient from '../axiosClient';

export const getOrders = () => axiosClient.get('/orders');
export const createOrder = (data) => axiosClient.post('/orders', data);
export const updateOrderStatus = (id, data) =>
  axiosClient.put(`/orders/${id}`, data);
