import axios from 'axios';

const API_URL = 'http://localhost:8080/api/status';
class AdminOrderService {
    submitOrder(orderData) {
        return axios.post(`${API_URL}/saveStatus`,orderData); 
    }
    getOrderById(ordersID) {
        return axios.get(`${API_URL}/getOrderByOrderID/${ordersID}`);
    }

    
}

export default new AdminOrderService();