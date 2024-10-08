import axios from 'axios';

const API_URL = 'http://localhost:8080/api/order';
class OrderService {
    submitOrder(orderData) {
        return axios.post(`${API_URL}/saveOrder`,orderData); 
    }
    getOrderById(ordersID) {
        return axios.get(`${API_URL}/getOrderByOrderID/${ordersID}`);
    }

    updateOrder(ordersID, orderingData) {
        return axios.put(`${API_URL}/updateOrderByOrderID/${ordersID}`, orderingData);
    }

    updateorder(orderid, oderingData) {
        return axios.put(`${API_URL}/updateOrderByOrderID/${orderid}`,  oderingData);
    }

    deleteOrderById(id) {
        return axios.delete(`${API_URL}/deleteOrderByOrderID/${id}`);
    }
}

export default new OrderService();