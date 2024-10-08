import axios from 'axios';

const API_URL = 'http://localhost:8080/api/bill';
class BillService {
    submitBill(billData) {
        return axios.post(`${API_URL}/saveBill`,billData); 
    }
    getBillById(ordersID) {
        return axios.get(`${API_URL}/getOrderByOrderID/${ordersID}`);
    }

    updateBill(billID, BillingData) {
        return axios.put(`${API_URL}/updateBillByBillID/${billID}`,BillingData);
    }

    deleteBillById(billID) {
        return axios.delete(`${API_URL}/deleteBillByBillID/${billID}`);
    }
}

export default new BillService();